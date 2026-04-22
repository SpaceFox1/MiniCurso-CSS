<script lang="ts">
  import { getCurrStep } from "$lib/getStep";
  import { setAmountOfSteps } from "$lib/slideManager.svelte";

  setAmountOfSteps(2);
</script>

<div class="vertical">
  <h1 class="title">Contraste</h1>
  <div class="horizontal">
    <div class="vertical">
      <p><strong>Diferença visual entre elementos</strong></p>
      <p>• Cor</p>
      <p>• Tamanho</p>
      <p>• Espaçamento</p>
      <p>→ Direciona a atenção</p>
    </div>

    <div class="examples">
      {#if getCurrStep() > 0}
        <div class="example good">
          <h2>Bom</h2>
          <h3>Produto Incrível</h3>
          <p>O melhor produto que você já viu.</p>
          <button>Comprar</button>
        </div>

        {#if getCurrStep() > 1}
          <div class="example bad">
            <h2>Ruim</h2>
            <h3>Produto Incrível</h3>
            <p>O melhor produto que você já viu.</p>
            <button>Comprar</button>
          </div>
        {/if}
      {/if}
    </div>
  </div>
</div>

<style>
  .examples {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
  }

  .example {
    flex: 1;
    padding: 15px;
    border-radius: 8px;
  }

  /* BOM CONTRASTE */
  .good h3 {
    font-size: 20px;
    margin-bottom: 10px;
  }

  .good p {
    color: #666;
    margin-bottom: 15px;
  }

  .good button {
    background: #ff4d4d;
    color: #fff;
    border: none;
    padding: 10px;
    font-weight: bold;
    cursor: pointer;
  }

  /* MAU CONTRASTE */
  .bad h3 {
    font-size: 16px;
    color: #777;
    margin-bottom: 5px;
  }

  .bad p {
    color: #888;
    font-size: 14px;
    margin-bottom: 10px;
  }

  .bad button {
    background: #aaa;
    color: #777;
    border: none;
    padding: 8px;
    cursor: pointer;
  }
</style>
