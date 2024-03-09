import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import ClientPage from "./pages/ClientPage";
import HomePage from "./pages/HomePage";
export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/clients" element={<ClientPage />} />
      </Routes>
    </Router>
  );
}
