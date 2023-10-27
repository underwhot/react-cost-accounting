// import Card from '../UI/Card';
import CostDate from './CostDate';
import './CostItem.css';

const CostItem = ({ info }) => {
  const { date, title, price } = info;

  return (
    <li className="cost-item">
      <CostDate date={date}></CostDate>
      <div className="cost-item__description">
        <h2>{title}</h2>
        <div className="cost-item__price">${price}</div>
      </div>
    </li>
  );
};

export default CostItem;
