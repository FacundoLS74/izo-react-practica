import "./App.css";
import Menu from "./Menu";
import MainContent from "./MainContent";
import { PracticeProvider } from "./PracticeContext"; // Importa PracticeProvider

function App() {
  // Elimina el estado local de practiceSelected y la función setPracticeSelected
  // const [practiceSelected, setPracticeSelected] = useState("#practica_1");

  // JSX
  return (
    <PracticeProvider> {/* Envuelve la aplicación con PracticeProvider */}
      <div>
        <Menu />
        <MainContent />
      </div>
    </PracticeProvider>
  );
}

export default App;
