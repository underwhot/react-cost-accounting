import { useState } from 'react';
import ShowCostFormBtn from './ShowCostFormBtn';
import CostForm from './CostForm';
import './NewCost.css';

const NewCost = ({ onAddCost }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const addNewCostHandler = () => {
    setIsFormVisible(!isFormVisible);
  };

  const onSaveCostData = (inputCostData) => {
    onAddCost(inputCostData);
  };

  return (
    <div className="new-cost">
      {isFormVisible && <CostForm onSaveCostData={onSaveCostData} addNewCostHandler={addNewCostHandler}></CostForm>}
      {!isFormVisible && <ShowCostFormBtn addNewCostHandler={addNewCostHandler}></ShowCostFormBtn>}
    </div>
  );
};

export default NewCost;
