import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // API route to calculate tattoo sessions
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

      // Start with a base session
      let sessions = 1;

      // Add sessions based on skin type
      if (skinType === "dry") sessions += 1;
      if (skinType === "sensitive") sessions += 1;

      // Add sessions based on location
      const difficultLocations = ["hand", "foot", "neck"];
      if (difficultLocations.includes(location)) sessions += 1;

      // Add sessions based on ink quantity
      if (inkQuantity === "medium") sessions += 1;
      if (inkQuantity === "large") sessions += 2;
      if (inkQuantity === "xlarge") sessions += 3;

      // Add sessions based on ink layer
      if (inkLayer === "medium") sessions += 1;
      if (inkLayer === "heavy") sessions += 2;
      if (inkLayer === "cover") sessions += 2;

      // Add sessions based on scars
      if (scars === "light") sessions += 1;
      if (scars === "moderate") sessions += 2;
      if (scars === "severe") sessions += 3;

      // Add sessions based on colors (each additional color beyond black may add time)
      const colorCount = colors.length;
      if (colorCount > 1) sessions += Math.min(2, colorCount - 1);

      // Cap the maximum sessions at 8 for realism
      sessions = Math.min(8, sessions);

      res.json({ sessions });
    } catch (error) {
      console.error("Error calculating sessions:", error);
      res.status(500).json({ 
        message: "Error calculating sessions" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
