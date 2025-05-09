import { Button } from "@/components/ui/button";
import { CalculationResult } from "@/types/calculator";
import { Eraser } from "lucide-react";

interface CalculatorResultProps {
  result: CalculationResult;
  onReset: () => void;
}

export default function CalculatorResult({ 
  result, 
  onReset 
}: CalculatorResultProps) {
  return (
    <div className="mb-6">
      <div className="p-6 bg-primary text-white rounded-xl">
        <div className="flex items-center justify-center mb-4">
          <Eraser className="h-10 w-10 text-white mr-3" />
          <h2 className="text-xl font-semibold">Resultado da Estimativa</h2>
        </div>
        <p className="text-white mb-4 text-center">Com base nos critérios selecionados, estimamos para remoção completa:</p>
        
        <div className="text-center my-6">
          <span className="text-5xl font-bold text-white">{result.sessions}</span>
          <p className="text-lg mt-2 text-white">Sessões de remoção a laser</p>
        </div>
        
        <div className="bg-white/10 p-4 rounded-lg mt-4 text-sm">
          <p className="mb-1">Esta é apenas uma estimativa. O número real de sessões pode variar dependendo de:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Idade da tatuagem (tatuagens mais antigas podem ser mais fáceis de remover)</li>
            <li>Qualidade do equipamento de remoção a laser utilizado</li>
            <li>Resposta individual do seu corpo ao tratamento</li>
            <li>Intervalo entre as sessões (geralmente 6-8 semanas)</li>
            <li>Cuidados pós-tratamento seguidos corretamente</li>
          </ul>
        </div>
      </div>
      
      <div className="mt-6 text-center">
        <Button 
          onClick={onReset} 
          className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition duration-300 font-medium"
        >
          Calcular Novamente
        </Button>
      </div>
    </div>
  );
}
