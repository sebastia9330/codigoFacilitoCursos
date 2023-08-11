import logo from './logo.svg';
import Menu from './components/menu';
import './App.css';

function App() {
  const currentUrl = window.location.pathname
  function renderContent(){
    switch(currentUrl){
      case "/":
        break;
      case "/personajes":
        break;
      case "/episodios":
        break;
      case "/citas":
        break;
      default:
        break;
    }
  }
  return (
    <div className="App">
      <Menu/>
      {renderContent()}
    </div>
  );
}

export default App;
