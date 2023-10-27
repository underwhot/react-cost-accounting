import { useState } from 'react';
import NewCost from './components/NewCost/NewCost';
import Costs from './components/Costs/Costs';
import info from './data/info';
import './App.css';

const App = () => {
  const [costs, setCosts] = useState([...info]);

  const addCostHandler = (cost) => {
    setCosts((prevCosts) => {
      return [cost, ...prevCosts];
    });
  };

  return (
    <div className="App">
      <NewCost onAddCost={addCostHandler}></NewCost>
      <Costs costs={costs}></Costs>
    </div>
  );
};

export default App;
