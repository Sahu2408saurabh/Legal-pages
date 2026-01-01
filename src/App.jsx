import { BrowserRouter, Routes, Route } from "react-router-dom";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Thankyou from "./pages/DemoSuccess";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/thank-you" element={<Thankyou />}/> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
