import CostItem from './CostItem';
import './CostList.css';

const CostList = ({ filterdCosts }) => {
  if (filterdCosts.length === 0) {
    return <h2 className="cost-list__fallback">Costs not found</h2>;
  }

  return (
    <ul className="cost-list">
      {filterdCosts.map((cost) => (
        <CostItem info={cost} key={cost.id}></CostItem>
      ))}
    </ul>
  );
};

export default CostList;
