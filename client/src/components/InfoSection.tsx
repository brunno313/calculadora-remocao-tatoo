import { Card, CardContent } from "@/components/ui/card";
import { InfoIcon, LightbulbIcon, CheckIcon, Zap, ShieldAlert } from "lucide-react";

export default function InfoSection() {
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold text-secondary-dark mb-6">Sobre a Calculadora de Remoção de Tatuagens</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="shadow-md">
          <CardContent className="pt-6">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <InfoIcon className="text-primary text-xl" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">Como calculamos</h3>
            <p className="text-gray-600">
              Nossa calculadora leva em consideração diversos fatores que impactam o número de sessões necessárias para remover uma tatuagem, como tipo de pele, localização, tamanho, densidade da tinta, cicatrizes teciduais, e combinação de cores.
            </p>
          </CardContent>
        </Card>
        
        <Card className="shadow-md">
          <CardContent className="pt-6">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <LightbulbIcon className="text-primary text-xl" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">Dicas para o processo de remoção</h3>
            <p className="text-gray-600 mb-3">
              Para otimizar o processo de remoção e potencialmente reduzir o número de sessões:
            </p>
            <ul className="text-gray-600 space-y-2">
              <li className="flex items-start">
                <CheckIcon className="text-success mt-1 mr-2 h-4 w-4" />
                <span>Hidrate bem a pele entre as sessões</span>
              </li>
              <li className="flex items-start">
                <CheckIcon className="text-success mt-1 mr-2 h-4 w-4" />
                <span>Evite exposição solar na área tratada</span>
              </li>
              <li className="flex items-start">
                <CheckIcon className="text-success mt-1 mr-2 h-4 w-4" />
                <span>Siga rigorosamente as instruções pós-tratamento</span>
              </li>
              <li className="flex items-start">
                <CheckIcon className="text-success mt-1 mr-2 h-4 w-4" />
                <span>Mantenha o intervalo recomendado entre sessões</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <Card className="shadow-md">
          <CardContent className="pt-6">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Zap className="text-primary text-xl" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">Sobre o processo a laser</h3>
            <p className="text-gray-600">
              A remoção de tatuagem a laser funciona através da fragmentação das partículas de tinta em pedaços menores, que são então eliminados pelo sistema imunológico do corpo. Cores diferentes requerem diferentes comprimentos de onda de laser, e algumas cores (como verde e azul) são mais difíceis de remover.
            </p>
          </CardContent>
        </Card>
        
        <Card className="shadow-md">
          <CardContent className="pt-6">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <ShieldAlert className="text-primary text-xl" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">Importante saber</h3>
            <p className="text-gray-600 mb-3">
              Antes de iniciar o tratamento de remoção:
            </p>
            <ul className="text-gray-600 space-y-2">
              <li className="flex items-start">
                <CheckIcon className="text-success mt-1 mr-2 h-4 w-4" />
                <span>Consulte um profissional qualificado especializado em remoção de tatuagens</span>
              </li>
              <li className="flex items-start">
                <CheckIcon className="text-success mt-1 mr-2 h-4 w-4" />
                <span>Pergunte sobre o tipo de laser utilizado e sua adequação para seu tipo de pele</span>
              </li>
              <li className="flex items-start">
                <CheckIcon className="text-success mt-1 mr-2 h-4 w-4" />
                <span>Discuta expectativas realistas - remoção completa pode não ser possível em todos os casos</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
