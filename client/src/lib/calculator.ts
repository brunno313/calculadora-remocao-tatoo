import { CalculatorFormData } from "@/types/calculator";

export function calculateSessions(formData: CalculatorFormData): number {
  // Start with a base number of sessions for removal
  let sessions = 4;

  // Add sessions based on skin type
  if (formData.skinType === "dry") sessions += 1;
  if (formData.skinType === "oily") sessions += 1;
  if (formData.skinType === "sensitive") sessions += 2;

  // Add sessions based on location (areas with more blood flow typically remove faster)
  const difficultLocations = ["hand", "foot", "neck"];
  const mediumLocations = ["forearm", "leg"];
  if (difficultLocations.includes(formData.location)) sessions += 2;
  if (mediumLocations.includes(formData.location)) sessions += 1;

  // Add sessions based on tattoo size
  if (formData.inkQuantity === "medium") sessions += 2;
  if (formData.inkQuantity === "large") sessions += 4;
  if (formData.inkQuantity === "xlarge") sessions += 6;

  // Add sessions based on ink density
  if (formData.inkLayer === "medium") sessions += 2;
  if (formData.inkLayer === "heavy") sessions += 4;
  if (formData.inkLayer === "cover") sessions += 5; // Cover-ups are the hardest to remove

  // Add sessions based on scars
  if (formData.scars === "light") sessions += 1;
  if (formData.scars === "moderate") sessions += 2;
  if (formData.scars === "severe") sessions += 3;

  // Add sessions based on colors (different colors require different wavelengths)
  // Black and dark colors are easier to remove, colors like green, blue, and yellow are harder
  const difficultColors = ["green", "blue", "yellow", "white"];
  const mediumColors = ["red", "orange", "purple"];
  
  let colorAddition = 0;
  
  // Check for difficult colors
  formData.colors.forEach(color => {
    if (difficultColors.includes(color)) {
      colorAddition += 2;
    } else if (mediumColors.includes(color)) {
      colorAddition += 1;
    }
  });
  
  // Add color-based sessions (capped at 6 to prevent excessive estimates)
  sessions += Math.min(6, colorAddition);

  // Most removals take between 5-15 sessions for complete removal
  // Set a minimum of 5 for realism
  sessions = Math.max(5, sessions);
  
  // Cap the maximum sessions at 15 for very complex removals
  return Math.min(15, sessions);
}
