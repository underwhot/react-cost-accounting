import './CostDate.css';

const CostDate = ({ date }) => {
  const month = date.toLocaleString('en-EN', { month: 'long' });
  const year = date.getFullYear();
  const day = date.toLocaleString('en-EN', { day: '2-digit' });

  return (
    <div className="cost-date">
      <div className="cost-date__month">{month}</div>
      <div className="cost-date__year">{year}</div>
      <div className="cost-date__day">{day}</div>
    </div>
  );
};

export default CostDate;
