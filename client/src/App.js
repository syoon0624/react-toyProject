import logo from './logo.svg';
import './App.css';
import Test from './components/Test';
import axios from 'axios';


function App() {
  const getJson = async () => {
    axios.get('http://localhost:5001/json');
  }
  return (
    <div className="App">
      <Test />
    </div>
  );
}

export default App;
