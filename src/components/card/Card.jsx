import { useState } from "react";
import "./Card.css";
const Card = ({ data, prices, handleRender }) => {
  const [quantity, setQuantity] = useState(1);
  const [pricesData, _] = useState(prices);

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
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <div className="amount">
          <h3>${!isNaN(data.price * quantity) ? data.price * quantity : ""}</h3>
          <span className="btn">REMOVE</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
