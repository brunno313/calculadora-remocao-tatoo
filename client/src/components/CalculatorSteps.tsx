import { 
  SkinType, 
  TattooLocation, 
  InkQuantity, 
  InkLayer, 
  Scars, 
  TattooColor, 
  CalculatorFormData 
} from "@/types/calculator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

interface CalculatorStepsProps {
  currentStep: number;
  formData: CalculatorFormData;
  updateFormData: (key: keyof CalculatorFormData, value: string | string[]) => void;
}

export default function CalculatorSteps({ 
  currentStep, 
  formData, 
  updateFormData 
}: CalculatorStepsProps) {
  
  const handleColorChange = (color: TattooColor, checked: boolean) => {
    if (checked) {
      updateFormData("colors", [...formData.colors, color]);
    } else {
      updateFormData(
        "colors",
        formData.colors.filter((c) => c !== color)
      );
    }
  };

  const skinTypes: { value: SkinType; label: string; description: string }[] = [
    { 
      value: "normal", 
      label: "Pele Normal", 
      description: "Pele sem marcas ou cicatrizes, bem hidratada" 
    },
    { 
      value: "dry", 
      label: "Pele Seca", 
      description: "Pele com pouca umidade natural" 
    },
    { 
      value: "oily", 
      label: "Pele Oleosa", 
      description: "Pele com produção excessiva de óleo" 
    },
    { 
      value: "sensitive", 
      label: "Pele Sensível", 
      description: "Pele que reage facilmente a produtos ou irritações" 
    },
  ];

  const locations: { value: TattooLocation; label: string }[] = [
    { value: "arm", label: "Braço" },
    { value: "forearm", label: "Antebraço" },
    { value: "chest", label: "Peito" },
    { value: "back", label: "Costas" },
    { value: "leg", label: "Perna" },
    { value: "thigh", label: "Coxa" },
    { value: "foot", label: "Pé" },
    { value: "hand", label: "Mão" },
    { value: "neck", label: "Pescoço" },
  ];

  const inkQuantities: { value: InkQuantity; label: string; description: string }[] = [
    { 
      value: "small", 
      label: "Pequena", 
      description: "Até 7 cm, poucos detalhes, design simples" 
    },
    { 
      value: "medium", 
      label: "Média", 
      description: "Entre 7 e 15 cm, detalhes moderados" 
    },
    { 
      value: "large", 
      label: "Grande", 
      description: "Entre 15 e 25 cm, vários detalhes" 
    },
    { 
      value: "xlarge", 
      label: "Extra Grande", 
      description: "Maior que 25 cm, muitos detalhes e complexidade" 
    },
  ];

  const inkLayers: { value: InkLayer; label: string; description: string }[] = [
    { 
      value: "light", 
      label: "Superficial", 
      description: "Tatuagem com pouca penetração na pele, geralmente mais clara" 
    },
    { 
      value: "medium", 
      label: "Moderada", 
      description: "Profundidade média na pele, saturação normal" 
    },
    { 
      value: "heavy", 
      label: "Profunda", 
      description: "Tinta bem penetrada na pele, saturação densa" 
    },
    { 
      value: "cover", 
      label: "Cobertura/Cover-up", 
      description: "Tatuagem sobre outra tatuagem anterior" 
    },
  ];

  const scarTypes: { value: Scars; label: string; description: string }[] = [
    { 
      value: "none", 
      label: "Nenhuma", 
      description: "Pele sem cicatrizes ou alterações" 
    },
    { 
      value: "light", 
      label: "Leves", 
      description: "Pequenas cicatrizes ou estrias" 
    },
    { 
      value: "moderate", 
      label: "Moderadas", 
      description: "Cicatrizes visíveis ou estrias pronunciadas" 
    },
    { 
      value: "severe", 
      label: "Severas", 
      description: "Cicatrizes em relevo, queloides ou grandes queimaduras" 
    },
  ];

  const colors: { value: TattooColor; label: string; color: string }[] = [
    { value: "black", label: "Preto", color: "bg-black" },
    { value: "gray", label: "Cinza", color: "bg-gray-500" },
    { value: "red", label: "Vermelho", color: "bg-red-600" },
    { value: "blue", label: "Azul", color: "bg-blue-600" },
    { value: "green", label: "Verde", color: "bg-green-600" },
    { value: "yellow", label: "Amarelo", color: "bg-yellow-500" },
    { value: "orange", label: "Laranja", color: "bg-orange-500" },
    { value: "purple", label: "Roxo", color: "bg-purple-600" },
    { value: "white", label: "Branco", color: "bg-white border border-gray-300" },
  ];

  return (
    <div>
      {/* Step 1: Skin Type */}
      <div className={currentStep === 0 ? "block" : "hidden"}>
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Tipo de Pele</h2>
        <p className="text-gray-600 mb-4">Selecione o tipo de pele onde a tatuagem será removida.</p>
        
        <RadioGroup
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6"
          value={formData.skinType}
          onValueChange={(value) => updateFormData("skinType", value as SkinType)}
        >
          {skinTypes.map((type) => (
            <div 
              key={type.value}
              className="flex p-4 border border-gray-200 rounded-lg hover:border-primary cursor-pointer transition-all"
            >
              <RadioGroupItem 
                value={type.value} 
                id={`skin-${type.value}`} 
                className="mr-3 mt-1"
              />
              <div>
                <Label htmlFor={`skin-${type.value}`} className="font-medium text-gray-800">
                  {type.label}
                </Label>
                <p className="text-sm text-gray-500 mt-1">{type.description}</p>
              </div>
            </div>
          ))}
        </RadioGroup>
      </div>

      {/* Step 2: Tattoo Location */}
      <div className={currentStep === 1 ? "block" : "hidden"}>
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Localização da Tatuagem</h2>
        <p className="text-gray-600 mb-4">Onde está localizada a tatuagem a ser removida?</p>
        
        <RadioGroup
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-6"
          value={formData.location}
          onValueChange={(value) => updateFormData("location", value as TattooLocation)}
        >
          {locations.map((location) => (
            <div 
              key={location.value}
              className="flex items-center p-3 border border-gray-200 rounded-lg hover:border-primary cursor-pointer transition-all"
            >
              <RadioGroupItem 
                value={location.value} 
                id={`location-${location.value}`} 
                className="mr-2"
              />
              <Label htmlFor={`location-${location.value}`} className="font-medium text-gray-800">
                {location.label}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      {/* Step 3: Ink Quantity */}
      <div className={currentStep === 2 ? "block" : "hidden"}>
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Tamanho da Tatuagem</h2>
        <p className="text-gray-600 mb-4">Qual o tamanho aproximado da tatuagem a ser removida?</p>
        
        <RadioGroup
          className="grid grid-cols-1 gap-4 mb-6"
          value={formData.inkQuantity}
          onValueChange={(value) => updateFormData("inkQuantity", value as InkQuantity)}
        >
          {inkQuantities.map((quantity) => (
            <div 
              key={quantity.value}
              className="flex p-4 border border-gray-200 rounded-lg hover:border-primary cursor-pointer transition-all"
            >
              <RadioGroupItem 
                value={quantity.value} 
                id={`quantity-${quantity.value}`} 
                className="mr-3 mt-1"
              />
              <div>
                <Label htmlFor={`quantity-${quantity.value}`} className="font-medium text-gray-800">
                  {quantity.label}
                </Label>
                <p className="text-sm text-gray-500 mt-1">{quantity.description}</p>
              </div>
            </div>
          ))}
        </RadioGroup>
      </div>

      {/* Step 4: Ink Layer */}
      <div className={currentStep === 3 ? "block" : "hidden"}>
        <h2 className="text-xl font-semibold mb-4 text-secondary-dark">Densidade da Tatuagem</h2>
        <p className="text-secondary mb-4">Qual a profundidade/densidade da tatuagem a ser removida?</p>
        
        <RadioGroup
          className="grid grid-cols-1 gap-4 mb-6"
          value={formData.inkLayer}
          onValueChange={(value) => updateFormData("inkLayer", value as InkLayer)}
        >
          {inkLayers.map((layer) => (
            <div 
              key={layer.value}
              className="flex p-4 border border-gray-200 rounded-lg hover:border-primary cursor-pointer transition-all"
            >
              <RadioGroupItem 
                value={layer.value} 
                id={`layer-${layer.value}`} 
                className="mr-3 mt-1"
              />
              <div>
                <Label htmlFor={`layer-${layer.value}`} className="font-medium text-secondary-dark">
                  {layer.label}
                </Label>
                <p className="text-sm text-gray-500 mt-1">{layer.description}</p>
              </div>
            </div>
          ))}
        </RadioGroup>
      </div>

      {/* Step 5: Scars and Tissue */}
      <div className={currentStep === 4 ? "block" : "hidden"}>
        <h2 className="text-xl font-semibold mb-4 text-secondary-dark">Cicatrizes e Alterações Teciduais</h2>
        <p className="text-secondary mb-4">A área da tatuagem possui alguma alteração de tecido?</p>
        
        <RadioGroup
          className="grid grid-cols-1 gap-4 mb-6"
          value={formData.scars}
          onValueChange={(value) => updateFormData("scars", value as Scars)}
        >
          {scarTypes.map((scar) => (
            <div 
              key={scar.value}
              className="flex p-4 border border-gray-200 rounded-lg hover:border-primary cursor-pointer transition-all"
            >
              <RadioGroupItem 
                value={scar.value} 
                id={`scar-${scar.value}`} 
                className="mr-3 mt-1"
              />
              <div>
                <Label htmlFor={`scar-${scar.value}`} className="font-medium text-secondary-dark">
                  {scar.label}
                </Label>
                <p className="text-sm text-gray-500 mt-1">{scar.description}</p>
              </div>
            </div>
          ))}
        </RadioGroup>
      </div>

      {/* Step 6: Colors */}
      <div className={currentStep === 5 ? "block" : "hidden"}>
        <h2 className="text-xl font-semibold mb-4 text-secondary-dark">Cores na Tatuagem</h2>
        <p className="text-secondary mb-4">Quais cores estão presentes na tatuagem a ser removida?</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {colors.map((color) => (
            <div 
              key={color.value}
              className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-primary transition-all"
            >
              <Checkbox
                id={`color-${color.value}`}
                className="mr-3"
                checked={formData.colors.includes(color.value)}
                onCheckedChange={(checked) => 
                  handleColorChange(color.value, checked as boolean)
                }
              />
              <div className="flex items-center">
                <span className={`w-5 h-5 rounded-full ${color.color} mr-2`}></span>
                <Label htmlFor={`color-${color.value}`} className="font-medium text-secondary-dark">
                  {color.label}
                </Label>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
