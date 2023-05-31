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
    </div>
  );
}

export default App;