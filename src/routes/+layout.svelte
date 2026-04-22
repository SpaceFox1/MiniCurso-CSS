<script lang="ts">
  import { resolve } from "$app/paths";
  import { page } from "$app/state";
  import { type Pathname } from "$app/types";
  import favicon from "$lib/assets/favicon.svg";
  import { getAmountOfSteps } from "$lib/slideManager.svelte";
  import type { Snippet } from "svelte";

  let { children }: { children: Snippet<[{ step: number }]> } = $props();

  const amountOfSlides = 15;
  const currentRoute = $derived(page.url.pathname.split("/").pop());
  const currentSlide = $derived(
    isNaN(Number(currentRoute)) ? 0 : Number(currentRoute),
  );

  const currentStep = $derived(Number(page.url.searchParams.get("step")) || 0);

  const prevUrl = $derived.by(() => {
    const targetStep = currentStep - 1;
    if (targetStep < 0) {
      const prevSlide = Math.max(0, currentSlide - 1);
      return `/slides/${prevSlide}?step=0`;
    }
    return `/slides/${currentSlide}?step=${targetStep}`;
  }) as Pathname;

  const nextUrl = $derived.by(() => {
    const totalSteps = getAmountOfSteps();
    const targetStep = currentStep + 1;

    if (targetStep > totalSteps) {
      const nextSlide = Math.min(amountOfSlides - 1, currentSlide + 1);
      return `/slides/${nextSlide}?step=0`;
    }
    return `/slides/${currentSlide}?step=${targetStep}`;
  }) as Pathname;

  $effect(() => {
    document.addEventListener("keyup", (e) => {
      if (e.key === "ArrowLeft")
        document.getElementById("previousSlideButton")?.click();
      else if (e.key === "ArrowRight")
        document.getElementById("nextSlideButton")?.click();
    });
  });
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<div class="content">
  <div class="sliderController">
    <a
      id="previousSlideButton"
      class="prev"
      aria-label="Previous Slide"
      href={resolve(prevUrl)}
    ></a>
    <a
      id="nextSlideButton"
      class="next"
      aria-label="Next Slide"
      href={resolve(nextUrl)}
    ></a>

    {#if currentSlide !== 0}
      <span class="slideNumber">{currentSlide}</span>
    {/if}
  </div>

  {@render children({ step: currentStep })}
</div>

<style global>
  @import "$lib/global.css";
</style>
