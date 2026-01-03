import { BrowserRouter, Routes, Route } from "react-router-dom";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Thankyou from "./pages/DemoSuccess";
import Contact from "./pages/contact";
 import BookDemo from "./pages/BookDemo";
import MultiStepForm from "./components/MultiStepForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/thank-you" element={<Thankyou />}/> 
        <Route path="/contact" element={<Contact />}/>
        <Route path="MultiStepForm" element={<MultiStepForm/>} /> 
        <Route path="/book-demo" element={<BookDemo />} />
         
      </Routes>
    </BrowserRouter>
  );
}

export default App;
