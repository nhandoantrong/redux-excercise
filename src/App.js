import React from 'react';
import './App.css';
import IncreaseCounter from './components/IncreaseCounter';
import DecreaseCounter from './components/DecreaseCounter';
import Counter from './components/Counter';


function App() {
  return (
    <div className="App">
      <div className="counter">
        <h1>Counter</h1>
        <div>
          <DecreaseCounter />
          <Counter />
          <IncreaseCounter />
        </div>

      </div>
    </div>
  );
}



export default App;
