import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LandingPage from "./LandingPage";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-white min-h-screen">
        <LandingPage />
      </div>
    </QueryClientProvider>
  );
}

export default App;
