<script lang="ts">
  import { setAmountOfSteps } from "$lib/slideManager.svelte";
  setAmountOfSteps(0);
</script>

<div class="vertical">
  <h1 class="title">Contraste</h1>

  <div class="bad-contrast vertical">
    <div class="horizontal">
      <h2>SUPER PROMOÇÃO!!!</h2>
      <span>IMPERDÍVEL</span>
      <span>IMPERDÍVEL</span>
      <span>IMPERDÍVEL</span>
      <span>IMPERDÍVEL</span>
      <span>AGORA!!!</span>
      <span>AGORA!!!</span>
      <span>AGORA!!!</span>
      <span>AGORA!!!</span>
      <span>AGORA!!!</span>
      <span>AGORA!!!</span>
    </div>

    <div class="horizontal">
      <p>O MELHOR PRODUTO DO MUNDO!!!</p>
      <p>O MELHOR PRODUTO DO MUNDO!!!</p>
      <p>O MELHOR PRODUTO DO MUNDO!!!</p>
      <p>O MELHOR PRODUTO DO MUNDO!!!</p>
      <p>O MELHOR PRODUTO DO MUNDO!!!</p>
      <p>O MELHOR PRODUTO DO MUNDO!!!</p>
      <p>O MELHOR PRODUTO DO MUNDO!!!</p>
      <p>O MELHOR PRODUTO DO MUNDO!!!</p>
      <p>O MELHOR PRODUTO DO MUNDO!!!</p>
      <p>GARANTIA TOTAL!!!</p>
    </div>

    <div class="horizontal">
      <button>COMPRAR AGORA</button>
      <button>COMPRAR AGORA</button>
      <button>COMPRAR AGORA</button>
      <button>COMPRAR AGORA</button>
      <button>VER MAIS</button>
      <button>ÚLTIMAS UNIDADES</button>
    </div>

    <div class="horizontal">
      <!-- svelte-ignore a11y_invalid_attribute -->
      <a href="#">CLIQUE AQUI</a>
      <!-- svelte-ignore a11y_invalid_attribute -->
      <a href="#">CLIQUE AQUI</a>
      <!-- svelte-ignore a11y_invalid_attribute -->
      <a href="#">CLIQUE AQUI</a>
      <!-- svelte-ignore a11y_invalid_attribute -->
      <a href="#">CLIQUE AQUI</a>
      <!-- svelte-ignore a11y_invalid_attribute -->
      <a href="#">CLIQUE AQUI</a>
      <!-- svelte-ignore a11y_invalid_attribute -->
      <a href="#">CLIQUE AQUI</a>
      <!-- svelte-ignore a11y_invalid_attribute -->
      <a href="#">CLIQUE AQUI</a>
      <!-- svelte-ignore a11y_invalid_attribute -->
      <a href="#">CLIQUE AQUI</a>
      <!-- svelte-ignore a11y_invalid_attribute -->
      <a href="#">CLIQUE AQUI</a>
      <!-- svelte-ignore a11y_invalid_attribute -->
      <a href="#">SAIBA MAIS</a>
      <!-- svelte-ignore a11y_invalid_attribute -->
      <a href="#">NÃO PERCA</a>
    </div>

    <div class="horizontal">
      <strong>50% OFF</strong>
      <strong>BLACK FRIDAY</strong>
      <strong>BLACK FRIDAY</strong>
      <strong>BLACK FRIDAY</strong>
      <strong>BLACK FRIDAY</strong>
      <strong>BLACK FRIDAY</strong>
      <strong>BLACK FRIDAY</strong>
      <strong>BLACK FRIDAY</strong>
      <strong>BLACK FRIDAY</strong>
      <strong>EXCLUSIVO</strong>
      <strong>EXCLUSIVO</strong>
      <strong>EXCLUSIVO</strong>
    </div>
  </div>
</div>

<style>
  .bad-contrast {
    padding: 20px;
    border-radius: 8px;
    gap: 10px;
    font-weight: bold;
  }

  .bad-contrast .horizontal {
    justify-content: space-between;
  }

  .bad-contrast h2 {
    color: red;
    font-size: 28px;
  }

  .bad-contrast span {
    color: orange;
    font-size: 20px;
  }

  .bad-contrast p {
    color: blue;
    font-size: 18px;
  }

  .bad-contrast button {
    background: yellow;
    color: black;
    border: 3px solid red;
    padding: 10px;
    font-size: 16px;
  }

  .bad-contrast a {
    color: lime;
    font-size: 16px;
  }

  .bad-contrast strong {
    color: magenta;
    font-size: 18px;
  }
</style>
