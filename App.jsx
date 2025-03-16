import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import Dashboard from "./pages/Dashboard";
import ChatbotPage from "./pages/ChatbotPage";
import JhunjhunwalaPage from "./pages/JhunjhunwalaPage";
import SettingsPage from "./pages/SettingsPage";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  return (
    <ThemeProvider>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<ChatbotPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/jhunjhunwala" element={<JhunjhunwalaPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
