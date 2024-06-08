import { useState } from "react";
import "./Card.css";
import { useDispatch } from "react-redux";
import { change } from "../../features/total/totalSlice";

// A card component which recieves data to be rendered, a re-render function and a prices object to handle calculation of total.
const Card = ({ data, prices, handleRender }) => {
  const [quantity, setQuantity] = useState(1);
  const [pricesData, _] = useState(prices);

  // dispatch hook used to dispatch our values to redux slice.
  const dispatch = useDispatch();

  // function to delete product from cart and re-calculate total.
  const handleClick = (id) => {
    delete pricesData[id];
    dispatch(change(UpdateTotal(pricesData)));
    handleRender(id);
  };

  // function to calculate total.
  const UpdateTotal = (prices) => {
    let total = 0;
    for (let price in prices) {
      total += prices[price].price * prices[price].quantity;
    }
    return total;
  };
  // function to handle change in quantity and update the total.
  const handleChange = (e, id) => {
    if (quantity !== "") {
      setQuantity(parseInt(e.target.value));
      pricesData[id].quantity = parseInt(e.target.value);
      dispatch(change(UpdateTotal(pricesData)));
    }
  };

  return (
    <div className="card">
      <div className="product">
        <div className="thumbnail">
          <img src={data.thumbnail} alt={data.title} />
        </div>
        <div className="details">
          <h2>{data.title}</h2>
          <p className="description">Description:</p>
          <p>{data.description}</p>
        </div>
      </div>
      <div className="price-container">
        <div className="quantity">
          <input
            type="number"
            className="quantity-input"
            min={1}
            value={quantity}
            onChange={(e) => handleChange(e, data.id)}
          />
        </div>
        <div className="amount">
          <h3>${!isNaN(data.price * quantity) ? data.price * quantity : ""}</h3>
          <span className="btn" onClick={() => handleClick(data.id)}>
            REMOVE
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
