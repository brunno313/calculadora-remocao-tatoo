export type SkinType = 'normal' | 'dry' | 'oily' | 'sensitive';

export type TattooLocation = 
  | 'arm' 
  | 'forearm' 
  | 'chest' 
  | 'back' 
  | 'leg' 
  | 'thigh' 
  | 'foot' 
  | 'hand' 
  | 'neck';

export type InkQuantity = 'small' | 'medium' | 'large' | 'xlarge';

export type InkLayer = 'light' | 'medium' | 'heavy' | 'cover';

export type Scars = 'none' | 'light' | 'moderate' | 'severe';

export type TattooColor = 
  | 'black' 
  | 'gray' 
  | 'red' 
  | 'blue' 
  | 'green' 
  | 'yellow' 
  | 'orange' 
  | 'purple' 
  | 'white';

export interface CalculatorFormData {
  skinType: SkinType;
  location: TattooLocation;
  inkQuantity: InkQuantity;
  inkLayer: InkLayer;
  scars: Scars;
  colors: TattooColor[];
}

export interface CalculationResult {
  sessions: number;
}
