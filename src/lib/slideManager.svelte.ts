interface SlideState {
  amountOfSteps: number;
}

const slideState = $state<SlideState>({
  amountOfSteps: 0,
});

export function getAmountOfSteps(): number {
  return slideState.amountOfSteps;
}

export function setAmountOfSteps(steps: number): void {
  slideState.amountOfSteps = steps;
}

