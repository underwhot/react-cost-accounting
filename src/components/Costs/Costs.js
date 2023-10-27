import { useState } from 'react';
import CostsFilter from './CostsFilter';
// import CostItem from './CostItem';
// import Card from '../UI/Card';
import './Costs.css';
import CostList from './CostList';
import CostsDiagram from './CostsDiagram';

const Costs = ({ costs }) => {
  const [year, setYear] = useState('all');

  const onChangeYear = (year) => {
    setYear(year);
  };

  let filterdCosts;

  year === 'all'
    ? (filterdCosts = costs)
    : (filterdCosts = costs.filter((cost) => {
        return cost.date.getFullYear() === +year;
      }));

  return (
    <div className="costs">
      <CostsFilter year={year} onChangeYear={onChangeYear}></CostsFilter>
      <CostsDiagram costs={filterdCosts}></CostsDiagram>
      <CostList filterdCosts={filterdCosts}></CostList>
    </div>
  );
};

export default Costs;
