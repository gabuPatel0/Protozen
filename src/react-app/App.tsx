import { BrowserRouter as Router, Routes, Route } from "react-router";
import { ThemeProvider } from "@/react-app/components/ThemeProvider";
import HomePage from "@/react-app/pages/Home";

export default function App() {
  const basename = import.meta.env.PROD && import.meta.env.VITE_GITHUB_PAGES === 'true' 
    ? '/Protozen' 
    : '';

  return (
    <ThemeProvider>
      <Router basename={basename}>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
