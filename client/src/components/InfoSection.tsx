import { Card, CardContent } from "@/components/ui/card";
import { InfoIcon, LightbulbIcon, CheckIcon } from "lucide-react";

export default function InfoSection() {
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold text-secondary-dark mb-6">Sobre a Calculadora de Sessões</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="shadow-md">
          <CardContent className="pt-6">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <InfoIcon className="text-primary text-xl" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-secondary-dark">Como calculamos</h3>
            <p className="text-secondary">
              Nossa calculadora leva em consideração diversos fatores que impactam o número de sessões necessárias para uma tatuagem, como tipo de pele, localização, quantidade de tinta, camadas, cicatrizes, e combinação de cores.
            </p>
          </CardContent>
        </Card>
        
        <Card className="shadow-md">
          <CardContent className="pt-6">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <LightbulbIcon className="text-primary text-xl" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-secondary-dark">Dicas para o processo</h3>
            <p className="text-secondary mb-3">
              Para otimizar o processo de tatuagem e potencialmente reduzir o número de sessões:
            </p>
            <ul className="text-secondary space-y-2">
              <li className="flex items-start">
                <CheckIcon className="text-success mt-1 mr-2 h-4 w-4" />
                <span>Mantenha a pele bem hidratada antes da sessão</span>
              </li>
              <li className="flex items-start">
                <CheckIcon className="text-success mt-1 mr-2 h-4 w-4" />
                <span>Evite exposição solar na área a ser tatuada</span>
              </li>
              <li className="flex items-start">
                <CheckIcon className="text-success mt-1 mr-2 h-4 w-4" />
                <span>Siga as instruções de cuidados pós-tatuagem</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
