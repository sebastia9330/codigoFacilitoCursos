import logo from './logo.svg';
import Menu from './components/menu';
import Home from './components/Home/home';
import './App.css';
import Personajes from './components/personajes';
import Episodios from './components/episodios';
import Citas from './components/citas';

function App() {
  const currentUrl = window.location.pathname
  function renderContent(){
    switch(currentUrl){
      case "/":
        return <Home/>
      case "/personajes":
        return <Personajes/>
      case "/episodios":
        return <Episodios/>
      case "/citas":
        return <Citas/>
      default:
        return <Home/>
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
