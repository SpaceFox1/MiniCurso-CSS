<script lang="ts">
  import { onDestroy, onMount } from 'svelte';
	import type * as Monaco from 'monaco-editor/esm/vs/editor/editor.api.js';

  interface Props {
    code: string;
    fileName: string;
    exampleHTML: string;
  }
  const props: Props = $props();

  let processedHTML = $state('');
  let processedCode = $state('');
  let prettyCode = $state('');

  function parseCssTag(uuid: string, word: string, html: string): { html: string, word: string} {
    if (word.startsWith('&') || word.startsWith('*') || word.startsWith(':') || word.startsWith('{')) return { word, html };
    if (word.startsWith('#') || word.startsWith('.')) {
      const htmlReg = new RegExp(`(id|class)(\\s*=\\s*)(["'])([^"']*?)\\b${word.slice(1)}\\b([^"']*?)(["'])`, 'g');
      html = html.replaceAll(htmlReg, `$1$2$3$4${word.slice(1)}${uuid}$5$6`);
      return { html, word: `${word}${uuid}`};
    }
    html = html.replaceAll(new RegExp('<' + RegExp.escape(word) + '(\\W)', 'gi'), `<${word}${uuid}$1`);
    html = html.replaceAll(new RegExp('</' + RegExp.escape(word) + '>', 'gi'), `</${word}${uuid}>`);
    console.log(html);
    return { html, word: `${word}${uuid}`};
  }

  function processCode(code: string) {
    let html = props.exampleHTML;
    let rPrettyCode: string[] = [];
    let tabulation = 0;
    processedCode = code.split('\n').map((line) => {
      const UUID = crypto.randomUUID().replaceAll('-', '');
      line = line.trim();
      if (line.includes('}')) tabulation--;
      rPrettyCode.push(`${''.padStart(tabulation * 2, ' ')}${line}`);
      if (line.includes('{')) {
        tabulation++
        const parts = line.split(' ');
        let newLine: string[] = [];
        parts.forEach((word) => {
          const data = parseCssTag(UUID, word, html);
          html = data.html;
          newLine.push(data.word);
        });
        line = newLine.join(' ');
      }
      return line;
    }).join('\n');
    processedHTML = html;
    if (rPrettyCode[0].length === 0) rPrettyCode.shift();
    prettyCode = rPrettyCode.join('\n');
  }

	let editor: Monaco.editor.IStandaloneCodeEditor;
	let monaco: typeof Monaco;
	let editorContainer: HTMLElement;
	let editorParent: HTMLElement;
  let preview: HTMLElement;

	onMount(async () => {
		monaco = (await import('$lib/monaco')).default;

    monaco.editor.defineTheme('Minicurso', {
      base: 'vs', inherit: true, rules: [],
      colors: {
        "editor.background": "#f0f0f0",
      }
    });
    monaco.editor.setTheme('Minicurso');
    editor = monaco.editor.create(editorContainer, { 
      automaticLayout: false,
      minimap: { enabled: false },
      fontSize: 18,
    });
    processCode(props.code);
		const model = monaco.editor.createModel(prettyCode, 'css');
		editor.setModel(model);
    editor.onDidChangeModelContent(() => {
      processCode(editor.getValue());
    });
    editor.onKeyUp((e) => {
      const isLeft = e.keyCode === monaco.KeyCode.LeftArrow;
      const isRight = e.keyCode === monaco.KeyCode.RightArrow;
      if (isLeft || isRight) e.stopPropagation();
    });
	});

  $effect(() => {
    window.addEventListener('resize', () => {
      if (!editor) return;
      editor.layout({ width: 0, height: 0 });
      window.requestAnimationFrame(() => {
        const rect = editorParent?.getBoundingClientRect();
        editor.layout({ width: rect.width, height: rect.height });
      });
    });
  })

	onDestroy(() => {
		monaco?.editor.getModels().forEach((model) => model.dispose());
		editor?.dispose();
    // eslint-disable-next-line svelte/no-dom-manipulating
    preview?.remove();
	});
</script>


<div class="codeBox">
  <div class='codeEditor'>
    <div class='file'>
      <div class='systemButtons'>
        <div class='systemButton' style="background: var(--sys-color-1);"></div>
        <div class='systemButton' style="background: var(--sys-color-2);"></div>
        <div class='systemButton' style="background: var(--sys-color-3);"></div>
      </div>
      <div class=fileButton>
        <div class='cssLogo' style='background-image: url("/icons/CSSLogo.svg");'></div>
        <span class='filename'>{props.fileName}  ×</span>
      </div>
    </div>
    <div class="js-editor-container" bind:this={editorParent}>
      <div class="editor" bind:this={editorContainer} ></div>
    </div>
  </div>
  <div class="preview" bind:this={preview}>
    <!-- eslint-disable-next-line svelte/no-at-html-tags -->
    {@html `${processedHTML}<style>${processedCode}</style>`}
  </div>
</div>


<style>
  .codeBox {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1em;
    width: 100%;
    height: 100%;
  }
  .codeEditor {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    border: 1px solid var(--black);
    border-radius: 8px;
    overflow: hidden;
    background: rgb(114, 80, 167);
    color: #fff;
  }

  .file {
    display: flex;
    flex-direction: row;
    gap: 1em;
    height: 1.75em;
    box-shadow: 0 0 1rem 0 #0005;
    z-index: 1;
  }

  .systemButtons {
    display: flex;
    flex-direction: row;
    gap: 0.25em;
    justify-content: space-between;
    align-items: center;
    width: fit-content;
    height: 100%;
    padding: 0.5em;
  }

  .systemButton {
    height: 100%;
    aspect-ratio: 1;
    border-radius: 50%;
  }

  .fileButton {
    display: flex;
    width: fit-content;
    justify-content: center;
    align-items: center;
    padding: 0.35em 0.5em 0.35em 0.75em;
    gap: 0.25em;
    margin-top: 0.15em;
    border-top-left-radius: 0.5em;
    border-top-right-radius: 0.5em;
    background: #fff5;
    position: relative;
    &:before, &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      transform: translate(-100%);
      height: 35%;
      width: auto;
      aspect-ratio: 1;
      background: #fff5;
      mask-image: radial-gradient(circle at 0 0, transparent 67%, black 67%);
    }
    &:after {
      left: unset;
      right: 0;
      transform: translate(100%);
      mask-image: radial-gradient(circle at 100% 0, transparent 67%, black 67%);
    }
  }

  .filename {
    font-size: 0.75em;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    white-space: pre;
    pointer-events: none;
    user-select: none;
  } 

  .cssLogo {
    height: 85%;
    aspect-ratio: 1;
    width: auto;
    background-size: contain;
  }

  .js-editor-container {
    padding-top: 1rem;
    background: #f0f0f0;
  }

  .js-editor-container, .editor {
    width: 100%;
    height: 100%;
  }
</style>