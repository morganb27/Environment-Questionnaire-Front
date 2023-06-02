import Questionnaire from './components/Questionnaire'; 
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";




function App() {
  return (
    <div className="container">
      <h1>Teste tes connaissances</h1>
      <Questionnaire 
        questionEndpoint="/environment_questions" 
      />
      <Link to="/second-quiz">Passe à un autre quiz pour découvrir comment tu peux aider à protéger l'environnement</Link>
      <Routes>
      <Route
          path="/second-quiz"
          element={<Questionnaire questionEndpoint="/mitigation_questions" />}
        />
      </Routes>
    </div>
    
  );
  
}

export default App;