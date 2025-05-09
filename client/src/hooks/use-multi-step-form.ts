import { useState } from "react";

export function useMultiStepForm(totalSteps: number) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  function next() {
    setCurrentStepIndex((prev) => {
      if (prev >= totalSteps - 1) return prev;
      return prev + 1;
    });
  }

  function back() {
    setCurrentStepIndex((prev) => {
      if (prev <= 0) return prev;
      return prev - 1;
    });
  }

  function goTo(index: number) {
    setCurrentStepIndex(index);
  }

  return {
    currentStepIndex,
    currentStep: currentStepIndex + 1,
    steps: totalSteps,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === totalSteps - 1,
    goTo,
    next,
    back,
  };
}
