import Questionnaire from './components/Questionnaire'; 
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";




function App() {
  return (
    <div className="container">
      <h1>Teste tes connaissances</h1>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Questionnaire 
                questionEndpoint="/environment_questions" 
                answerEndpoint="/submit_environment_answers"
              />
              <Link className="link" to="/second-quiz">Passe à un autre quiz pour découvrir comment tu peux aider à protéger l'environnement</Link>
            </>
          }
        />
        <Route
          path="/second-quiz"
          element={<Questionnaire questionEndpoint="/mitigation_questions" answerEndpoint="/submit_mitigation_answers"/>}
        />
      </Routes>
    </div>
  );
}



export default App;