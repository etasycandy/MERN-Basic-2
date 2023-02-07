/**
 * Import Components
 */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthForm from "./pages/AuthForm";
import Home from "./pages/Home";

function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<AuthForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;
