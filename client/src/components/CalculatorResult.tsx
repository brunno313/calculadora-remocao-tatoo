import { Button } from "@/components/ui/button";
import { CalculationResult } from "@/types/calculator";

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
      <div className="p-6 bg-secondary-dark text-white rounded-xl">
        <h2 className="text-xl font-semibold mb-2">Resultado da Estimativa</h2>
        <p className="text-white/70 mb-4">Com base nos critérios selecionados, estimamos:</p>
        
        <div className="text-center my-6">
          <span className="text-5xl font-bold text-accent">{result.sessions}</span>
          <p className="text-lg mt-2">Sessões de tatuagem</p>
        </div>
        
        <div className="bg-white/10 p-4 rounded-lg mt-4 text-sm">
          <p className="mb-1">Esta é apenas uma estimativa. O número real de sessões pode variar dependendo de:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Complexidade do design final</li>
            <li>Tolerância à dor do cliente</li>
            <li>Técnica e equipamento do tatuador</li>
            <li>Tempo de cicatrização entre sessões</li>
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
