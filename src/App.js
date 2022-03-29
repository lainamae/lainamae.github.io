import './styles/App.scss';
import Navbar from './components/Navbar';
import { Outlet} from "react-router-dom";




function App() {


  return (
    <div className="App">
      <header>
      <Navbar/>
      </header>
      <main>
      <Outlet/>
      </main>

    </div>
  );
}

export default App;
