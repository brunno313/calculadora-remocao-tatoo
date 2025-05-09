import { useState } from "react";
import { useMultiStepForm } from "@/hooks/use-multi-step-form";
import { CalculatorFormData, CalculationResult } from "@/types/calculator";
import { calculateSessions } from "@/lib/calculator";
import CalculatorSteps from "@/components/CalculatorSteps";
import CalculatorResult from "@/components/CalculatorResult";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export default function CalculatorForm() {
  const [formData, setFormData] = useState<CalculatorFormData>({
    skinType: "normal",
    location: "arm",
    inkQuantity: "small",
    inkLayer: "light",
    scars: "none",
    colors: ["black"],
  });

  const [result, setResult] = useState<CalculationResult | null>(null);
  const { toast } = useToast();

  const { 
    currentStep, 
    currentStepIndex, 
    steps, 
    isFirstStep, 
    isLastStep, 
    next, 
    back, 
    goTo
  } = useMultiStepForm(6);

  const updateFormData = (
    key: keyof CalculatorFormData,
    value: string | string[]
  ) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate that at least one color is selected
    if (formData.colors.length === 0) {
      toast({
        title: "Selecione pelo menos uma cor",
        description: "Você precisa selecionar pelo menos uma cor para a tatuagem",
        variant: "destructive",
      });
      return;
    }

    // Calculate the number of sessions based on the form data
    const sessions = calculateSessions(formData);
    setResult({ sessions });
  };

  const resetCalculator = () => {
    setResult(null);
    goTo(0);
  };

  const getProgressPercentage = () => {
    return Math.round(((currentStepIndex + 1) / steps) * 100);
  };

  return (
    <div>
      {/* Progress Indicator */}
      {!result && (
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium text-secondary">
              Etapa {currentStepIndex + 1} de {steps}
            </span>
            <span className="text-sm font-medium text-primary">
              {getProgressPercentage()}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-primary rounded-full h-2 transition-all duration-300 ease-in-out"
              style={{ width: `${getProgressPercentage()}%` }}
            ></div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {!result ? (
          <>
            <CalculatorSteps
              currentStep={currentStepIndex}
              formData={formData}
              updateFormData={updateFormData}
            />

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <Button
                type="button"
                variant="outline"
                onClick={back}
                disabled={isFirstStep}
              >
                Voltar
              </Button>
              
              {!isLastStep ? (
                <Button type="button" onClick={next}>
                  Próximo
                </Button>
              ) : (
                <Button type="submit">
                  Calcular
                </Button>
              )}
            </div>
          </>
        ) : (
          <CalculatorResult result={result} onReset={resetCalculator} />
        )}
      </form>
    </div>
  );
}
