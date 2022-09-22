import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Duas from './Duas/Duas';
import Home from './Home/Home';

function App() {


  return (
    <div className="flex">
      <Sidebar/>
      <Home/>
    </div>
  );
}

export default App;
