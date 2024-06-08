import { useSelector } from "react-redux";
import { totalValue } from "../features/total/totalSlice";
import "./components.css";

const Total = () => {
  const total = useSelector(totalValue);
  return (
    <>
      <div className="final-total">
        <div className="total-header">
          <h3>TOTAL :</h3>
        </div>
        <div className="final-total-amount">
          <h3>${total}</h3>
          <h4>Get Daily Cash with Nespola Card.</h4>
        </div>
      </div>
    </>
  );
};

export default Total;
