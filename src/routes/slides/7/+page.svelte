<script lang="ts">
  import { setAmountOfSteps } from "$lib/slideManager.svelte";
  setAmountOfSteps(0);
</script>

<div class="meta">
  <!-- ESQUERDA (exemplo) -->
  <div class="side left classecomnomemtespecificogambiarra">
    <div class="example good vertical">
      <h3>Consistente</h3>

      <div class="card">
        <h4>Produto A</h4>
        <p>Descrição padrão</p>
        <button>Comprar</button>
      </div>

      <div class="card">
        <h4>Produto B</h4>
        <p>Descrição padrão</p>
        <button>Comprar</button>
      </div>
    </div>
  </div>

  <!-- CENTRO (texto corrido) -->
  <div class="center">
    <p>
      Quando você mantém padrões visuais consistentes, o usuário aprende como
      sua interface funciona. Quando cada parte do layout segue regras
      diferentes, tudo parece estranho, imprevisível e difícil de usar. portanto
      sempre tente seguir seu padrão (dica: isso facilita até na hora de
      programar 🦊 )
    </p>
  </div>

  <!-- DIREITA (título + exemplo ruim) -->
  <div class="side right">
    <h1 class="title">Padronização</h1>

    <div class="example bad vertical">
      <h3>Inconsistente</h3>

      <div>
        <h2 style="color:red;">Produto A</h2>
        <button style="font-size: 20px;">COMPRAR!!!</button>
      </div>

      <div>
        <small>Produto B talvez</small>
        <a href="#">ver</a>
      </div>

      <div>
        <p style="font-size: 30px;">Produto C</p>
      </div>
    </div>
  </div>
</div>

<style>
  :global(body:has(.classecomnomemtespecificogambiarra)) {
    --white: #b8cbb6;
    --black: #494949;
    filter: hue-rotate(204deg);
  }
  .meta {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 40px;
  }

  .side {
    width: 25%;
  }

  .center {
    width: 40%;
    font-size: 18px;
    line-height: 1.5;
    text-align: center;
  }

  .right {
    text-align: right;
  }

  .example {
    margin-top: 20px;
    gap: 10px;
  }

  .card {
    border: 1px solid #aaa;
    padding: 10px;
    border-radius: 6px;
  }

  .card button {
    margin-top: 5px;
  }
</style>
