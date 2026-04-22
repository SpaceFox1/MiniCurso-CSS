<script lang="ts">
  import { setAmountOfSteps } from "$lib/slideManager.svelte";
  import { getCurrStep } from "$lib/getStep";
  setAmountOfSteps(6);
</script>

<div class="vertical">
  <h1 class="title">Hierarquia</h1>

  <div class="horizontal">
    <div class="vertical">
      <p><strong>Ordem de importância visual</strong></p>
      <p>• O que vem primeiro?</p>
      <p>• O que chama mais atenção?</p>
      <p>→ Guia a leitura</p>
    </div>

    <div class="vertical">
      
      <!-- BOM -->
      <div class="example good vertical">
        <h3>Bom</h3>

        <div class="row">
          {#if getCurrStep() >= 1}<span class="arrow">→</span>{/if}
          <h2>Nome do Produto</h2>
        </div>

        <div class="row indent-1">
          {#if getCurrStep() >= 2}<span class="arrow blue">→</span>{/if}
          <p><strong>Ergonomia</strong></p>
        </div>

        <div class="row indent-2">
          {#if getCurrStep() >= 3}<span class="arrow hotpink">→</span>{/if}
          <p>O produto tem a melhor ergonomia</p>
        </div>

        <div class="row indent-1">
          {#if getCurrStep() >= 4}<span class="arrow blue">→</span>{/if}
          <p><strong>Ponto de venda</strong></p>
        </div>

        <div class="row indent-2">
          {#if getCurrStep() >= 5}<span class="arrow hotpink">→</span>{/if}
          <p>Disponível em todo o Brasil</p>
        </div>

        <div class="row indent-1">
          {#if getCurrStep() >= 6}<span class="arrow blue">→</span>{/if}
          <button>COMPRAR</button>
        </div>
      </div>

      <!-- RUIM -->
      <div class="example bad vertical">
        <h3>Ruim</h3>

        <button>🔥🔥 COMPRAR AGORA 🔥🔥</button>

        <p style="font-size: 28px;">ergonomia incrível talvez</p>

        <h2 style="font-size: 12px;">nome do produto sei lá</h2>

        <p style="font-size: 22px;">disponível em algum lugar</p>

        <small style="font-size: 30px;">isso aqui parece importante!!!</small>
      </div>

    </div>
  </div>
</div>

<style>
  .example {
    border: 1px solid #ccc;
    padding: 10px;
  }

  .row {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .arrow {
    color: red;
    font-weight: bold;
  }

  .indent-1 {
    margin-left: 15px;
  }

  .indent-2 {
    margin-left: 30px;
  }

  /* BOM */
  .good {
    gap: 8px;
  }

  .good h2 {
    font-size: 22px;
  }

  .good p {
    font-size: 14px;
    margin: 0;
  }

  .good button {
    font-size: 14px;
    padding: 8px;
  }

  .good h3 {
    color: #00aa00;
  }

  /* RUIM */
  .bad {
    gap: 2px;
  }

  .bad h3 {
    color: #aa0000;
  }

  .bad button {
    font-size: 26px;
    padding: 10px;
  }

  .blue {
    color: blue;
  }

  .hotpink {
    color: rgb(242, 0, 255);
  }
</style>