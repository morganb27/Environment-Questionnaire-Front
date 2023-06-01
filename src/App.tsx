import Questionnaire from './components/Questionnaire'; 
import "./App.css";


function App() {
  return (
    <div className="container">
      <h1>Teste tes connaissances</h1>
      <Questionnaire 
        questionEnvironmentEndpoint="/environment_questions" 
        questionMitigationEndpoint="/mitigation_questions"
      />
      <a href="www.google.com">Passe à un autre quiz pour découvrir comment tu peux aider à protéger l'environnement</a>
    </div>
  );
}

export default App;