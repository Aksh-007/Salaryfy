import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import QuestionnaireModule from "./modules/questionnaire/questionnaire.module";
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path="questionnaire" element={<QuestionnaireModule />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
