import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import './CostForm.css';

const CostForm = ({ onSaveCostData, addNewCostHandler }) => {
  const [data, setData] = useState({ title: '', price: '', date: '' });

  const nameChangeHandler = (text, name) => {
    setData((prevState) => {
      return { ...prevState, [name]: text };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const costData = {
      ...data,
      date: new Date(data.date),
      id: uuidv4(),
    };

    onSaveCostData(costData);
    setData({ title: '', price: '', date: '' });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Title</label>
          <input
            type="text"
            onChange={(e) => nameChangeHandler(e.target.value, 'title')}
            value={data.title}
          ></input>
        </div>
        <div className="new-cost__control">
          <label>Amount</label>
          <input
            type="number"
            min="1"
            onChange={(e) => nameChangeHandler(e.target.value, 'price')}
            value={data.amount}
          ></input>
        </div>
        <div className="new-cost__control">
          <label>Date</label>
          <input
            type="date"
            onChange={(e) => nameChangeHandler(e.target.value, 'date')}
            value={data.date}
          ></input>
        </div>
        <div className="new-cost__actions">
          <button type="submit">Add</button>
          <button onClick={() => addNewCostHandler()}>Cancel</button>
        </div>
      </div>
    </form>
  );
};

export default CostForm;
