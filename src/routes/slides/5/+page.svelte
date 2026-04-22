<script lang="ts">
  import { getCurrStep } from "$lib/getStep";
  import { setAmountOfSteps } from "$lib/slideManager.svelte";
  setAmountOfSteps(3);
</script>

<div class="vertical">
  <h1 class="title">Espaçamento</h1>

  <div class="horizontal">
    <div class="vertical">
      <p><strong>Distância entre elementos</strong></p>
      <p>• Agrupa relacionados</p>
      <p>• Separa diferentes</p>
      <p>• Melhora leitura</p>
      <p>→ Cria organização</p>
      <h2>ESTRUTURA!!!</h2>
    </div>

    <div class="vertical">
      
      <div class="example good vertical">
        <h3>Bom</h3>

        <div class:border={getCurrStep() >= 1}>
          <p>Título</p>
          <p>Descrição do produto</p>
        </div>

        <div class:border={getCurrStep() >= 2}>
          <p>Ponto de venda</p>
          <p>Descrição do ponto</p>
        </div>

        <button class:border={getCurrStep() >= 3}>Comprar</button>
      </div>

      <div class="example bad vertical">
        <h3>Ruim</h3>
        <p>Título</p>
        <p>Descrição do produto</p>
        <p>Ponto de venda</p>
        <p>Descrição do ponto</p>
        <button>Comprar</button>
      </div>

    </div>
  </div>
</div>

<style>
  .example {
    flex: 1;
    border: 4px solid #000;
    padding: 10px;
  }

  .border {
    border: 2px dashed red;
  }

  /* BOM */
  .good {
    gap: 10px;
  }

  .good p {
    margin: 0;
  }

  .good button {
    margin-top: 10px;
  }

  .good h3 {
    color: #00aa00;
  }

  /* RUIM */
  .bad {
    gap: 0;
  }

  .bad p {
    margin: 0;
  }

  .bad button {
    margin-top: 0;
  }

  .bad h3 {
    color: #aa0000;
  }
</style>