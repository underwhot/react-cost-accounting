import DiagramBar from './DiagramBar';
import './Diagram.css';

const Diagram = ({ dataSets }) => {
  const dataSetsValues = dataSets.map((dataSet) => dataSet.value);
  const maxMonthCosts = Math.max(...dataSetsValues);

  return (
    <div className="diagram">
      {dataSets.map((dataSet) => (
        <DiagramBar
          key={dataSet.label}
          value={dataSet.value}
          label={dataSet.label}
          maxValue={maxMonthCosts}
        ></DiagramBar>
      ))}
    </div>
  );
};

export default Diagram;
