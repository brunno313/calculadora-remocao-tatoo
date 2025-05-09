import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // API route to calculate tattoo removal sessions
  app.post("/api/calculate", (req, res) => {
    try {
      const { 
        skinType, 
        location, 
        inkQuantity, 
        inkLayer, 
        scars, 
        colors 
      } = req.body;

      // Basic validation
      if (!skinType || !location || !inkQuantity || !inkLayer || !scars || !colors) {
        return res.status(400).json({ 
          message: "Missing required parameters" 
        });
      }

      // Start with a base number of sessions for removal
      let sessions = 4;

      // Add sessions based on skin type
      if (skinType === "dry") sessions += 1;
      if (skinType === "oily") sessions += 1;
      if (skinType === "sensitive") sessions += 2;

      // Add sessions based on location (areas with more blood flow typically remove faster)
      const difficultLocations = ["hand", "foot", "neck"];
      const mediumLocations = ["forearm", "leg"];
      if (difficultLocations.includes(location)) sessions += 2;
      if (mediumLocations.includes(location)) sessions += 1;

      // Add sessions based on tattoo size
      if (inkQuantity === "medium") sessions += 2;
      if (inkQuantity === "large") sessions += 4;
      if (inkQuantity === "xlarge") sessions += 6;

      // Add sessions based on ink density
      if (inkLayer === "medium") sessions += 2;
      if (inkLayer === "heavy") sessions += 4;
      if (inkLayer === "cover") sessions += 5; // Cover-ups are the hardest to remove

      // Add sessions based on scars
      if (scars === "light") sessions += 1;
      if (scars === "moderate") sessions += 2;
      if (scars === "severe") sessions += 3;

      // Add sessions based on colors (different colors require different wavelengths)
      // Black and dark colors are easier to remove, colors like green, blue, and yellow are harder
      const difficultColors = ["green", "blue", "yellow", "white"];
      const mediumColors = ["red", "orange", "purple"];
      
      let colorAddition = 0;
      
      // Check for difficult colors
      colors.forEach((color: string) => {
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
      sessions = Math.min(15, sessions);

      res.json({ sessions });
    } catch (error) {
      console.error("Error calculating removal sessions:", error);
      res.status(500).json({ 
        message: "Error calculating removal sessions" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
