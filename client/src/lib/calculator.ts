import { CalculatorFormData } from "@/types/calculator";

export function calculateSessions(formData: CalculatorFormData): number {
  // Start with a base session
  let sessions = 1;

  // Add sessions based on skin type
  if (formData.skinType === "dry") sessions += 1;
  if (formData.skinType === "sensitive") sessions += 1;

  // Add sessions based on location
  const difficultLocations = ["hand", "foot", "neck"];
  if (difficultLocations.includes(formData.location)) sessions += 1;

  // Add sessions based on ink quantity
  if (formData.inkQuantity === "medium") sessions += 1;
  if (formData.inkQuantity === "large") sessions += 2;
  if (formData.inkQuantity === "xlarge") sessions += 3;

  // Add sessions based on ink layer
  if (formData.inkLayer === "medium") sessions += 1;
  if (formData.inkLayer === "heavy") sessions += 2;
  if (formData.inkLayer === "cover") sessions += 2;

  // Add sessions based on scars
  if (formData.scars === "light") sessions += 1;
  if (formData.scars === "moderate") sessions += 2;
  if (formData.scars === "severe") sessions += 3;

  // Add sessions based on colors (each additional color beyond black may add time)
  const colorCount = formData.colors.length;
  if (colorCount > 1) sessions += Math.min(2, colorCount - 1);

  // Cap the maximum sessions at 8 for realism
  return Math.min(8, sessions);
}
