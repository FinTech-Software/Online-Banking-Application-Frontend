import { ThemeProvider } from "./context/theme-provider";
import AppRoutes from "./routes/AppRoutes";
import "./styles/globals.css";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="flex min-h-screen flex-col">
        <main className="flex-1">
          <AppRoutes />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
