import { useState } from 'react';
import './CostsFilter.css';

const CostsFilter = ({ onChangeYear, year }) => {
  // const [year, setYear] = useState('2022');

  const yearChangeHandler = (e) => {
    onChangeYear(e.target.value);
    // setYear(e.target.value);
  };

  return (
    <div className="costs-filter">
      <div className="costs-filter__control">
        <label>Filter by year</label>
        <select value={year} onChange={yearChangeHandler}>
          <option value="all">All</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default CostsFilter;
