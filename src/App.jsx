import './App.css';
import Products from './components/Products/Products';
import Counter from './components/Counter';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useState } from 'react';


const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <Products/><br /><br />
      {/* <Counter counter={counter} setCounter={setCounter} price={counter}>
        {counter}
      </Counter> */}
      <br /><br />
    </div>
  );
}

export default App;
