import React, { useContext } from "react";
import { BasketContext } from "../utils/BasketContext";

export default function SingleItem({
  item,
  item: { category_name, description, img_url, item_id, item_name, price },
}) {
  const { basket, setBasket } = useContext(BasketContext);

  const handleClick = (e, item) => {
    e.preventDefault();
    setBasket((currBasket) => {
      return [...currBasket, item];
    });
    //add to basket context
    //update UI
  };
  console.log(basket);
  return (
    <div>
      Single Item: {item_name}
      <ol>
        <li>Category: {category_name}</li>
        <li>Description: {description}</li>
        <li>Price: {price}</li>
      </ol>
      <img src={img_url} alt={item_name} />
      <button
        onClick={(e) => {
          console.log(e);
          handleClick(e, item);
        }}
        value={item}
        className="border-2 border-gray-800 px-8 py-2 rounded-lg"
      >
        Add to Basket
      </button>
    </div>
  );
}
