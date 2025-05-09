import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import TattooCalculator from "@/pages/TattooCalculator";

// Hook para dar suporte a rotas no GitHub Pages
function useHashLocation() {
  const [loc, setLoc] = useLocation();
  
  // Basicamente, usamos a parte após # na URL como nossa rota
  // Isso é útil para GitHub Pages onde não há suporte para roteamento SPA
  const location = typeof window !== "undefined" ? window.location.hash.replace("#", "") || "/" : "/";
  
  const navigate = (to: string) => {
    window.location.hash = to;
  };
  
  return [location, navigate];
}

function Router() {
  return (
    <Switch hook={useHashLocation}>
      <Route path="/" component={TattooCalculator} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
