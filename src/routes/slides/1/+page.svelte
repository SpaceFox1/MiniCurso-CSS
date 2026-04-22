<script lang="ts">
  import { setAmountOfSteps } from "$lib/slideManager.svelte";
  setAmountOfSteps(0);
</script>

<div class="vertical">
  <h1 class="title">Nesse Minicurso</h1>
  <div class="horizontal spaceBetween">
    <ul class="list listGrid">
      <li class="list-topic">
        <h2 class="subtitle">Web-Design</h2>
        <ul class="list">
          <li>Contraste</li>
          <li>Espaçamento</li>
          <li>Hierarquia</li>
          <li>Padronização</li>
          <li>Exemplos</li>
        </ul>
      </li>

      <li class="list-topic">
        <h2 class="subtitle">Recursos Avançados</h2>
        <ul class="list">
          <li>Fontes Customizadas</li>
          <li>Variáveis</li>
          <li>Cores Dinâmicas</li>
          <li>Matemática</li>
          <li>Animações & Transições</li>
        </ul>
      </li>

      <li class="list-topic">
        <h2 class="subtitle">Princípios Base</h2>
        <ul class="list">
          <li>Cascata</li>
          <li>Seletores: IDs, Tags, Classes</li>
          <li>Caixas</li>
          <li>Posicionamento</li>
          <li>Pseudo-Elementos</li>
        </ul>
      </li>

      <li class="list-topic">
        <h2 class="subtitle">Dicas & Gambiarras</h2>
        <ul class="list">
          <li>Texto com Borda</li>
          <li>Centralizar Div</li>
          <li>Arredondamento Inverso</li>
          <li>Ícones Coloridos</li>
        </ul>
      </li>
    </ul>
  </div>
</div>

<style>
  .listGrid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
</style>
