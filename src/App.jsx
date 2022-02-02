import './App.css';
import { AppContextProvider } from './context/AppContext';
import Onboard from './Onboard.jsx';
import eden from './images/eden.png';

function App() {
  return (
    <div className="App">
      <p className="App-header">
        <img height="80" width="80" src={eden} /> <span>Eden</span> 
      </p>
      <AppContextProvider>
        <Onboard />
      </AppContextProvider>
    </div>
  );
}

export default App;