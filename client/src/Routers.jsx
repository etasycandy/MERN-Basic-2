/**
 * Import Components
 */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthForm from "./pages/AuthForm";

function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<AuthForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;
