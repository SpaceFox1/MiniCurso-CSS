<script lang="ts">
  import { setAmountOfSteps } from "$lib/slideManager.svelte";

  setAmountOfSteps(0);
</script>

<div class='layout'>
  <div></div>
  <div class='cape'>
    <h1 class="title-title" data-text="Minicurso: CSS">Minicurso: CSS</h1>
    <h2 class='title-subtitle'>Por: Emanuel Franklyn</h2>
    <div class='ball'></div>
  </div>
  <h3>Sertão Comp.</h3>
</div>

<style>
  @property --animation-progress {
    syntax: "<number>";
    inherits: true;
    initial-value: 0;
  }

  .layout {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 100%;
    --animation-progress: 0;
    animation: intro 5s ease-out forwards;
  }

  @keyframes intro {
    from { --animation-progress: 0; }
    to { --animation-progress: 1; }
  }

  .cape {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    isolation: isolate;
    rotate: 15deg;
    transform: rotateY(48deg);
    scale: calc(var(--animation-progress) * 2.3) calc(var(--animation-progress) * 0.8);
    background: repeating-linear-gradient(45deg, red, lime, blue);
    width: 45%;
    border-radius: 1rem;
    filter: drop-shadow(5px 5px 1rem green);
    border: 5px solid blue;
    background-size: 50% 35%;
  }

  .title-title {
    content: attr(data-text);
    font-family: Pacifico;
    font-size: 6rem;
    letter-spacing: 4px;
    background: linear-gradient(45deg, red, orange, yellow, lime, cyan, blue, purple, magenta, pink, red);
    background-clip: text;
    color: transparent;
    line-height: 6rem;
    position: relative;
    width: 100%;
    margin-left: -8%;
    rotate: -24deg;
    scale: calc(1 + ((1 - var(--animation-progress)) * 200));
    transform: translateY(calc((1 - var(--animation-progress)) * -300%));
  }

  .title-title::before {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    -webkit-text-stroke-color: red;
    -webkit-text-stroke-width: 4px;
    paint-order: stroke fill;
    z-index: -1;
    margin-top: 6px;
    margin-left: -3px;
  }

  .title-subtitle {
    margin-top: 4em;
    color: white;
    font-size: 1.15em;
    clip-path: polygon(0 0, calc(pow(var(--animation-progress), 1080) * 100%) 0, calc(pow(var(--animation-progress), 1080) * 100%) 100%, 0 100%);
  }

  .ball {
    width: 15rem;
    position: absolute;
    right: 1rem;
    bottom: -3rem;
    aspect-ratio: 1;
    height: auto;
    border-radius: 50%;
    background: 
      radial-gradient(circle at 45% 45%, transparent, #2121216f),
      radial-gradient(circle at 25% 25%, rebeccapurple, #212121)
    ;
    filter: drop-shadow(0.5rem 0.5rem 1rem black);
    scale: 0.6 1;
    scale: calc(0.6 + ((1 - var(--animation-progress)) * 8)) calc(1 + ((1 - var(--animation-progress)) * 15));
  }
</style>