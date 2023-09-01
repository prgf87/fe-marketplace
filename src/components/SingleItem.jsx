import React, { useContext } from "react";
import { BasketContext } from "../utils/BasketContext";

export default function SingleItem({
  setCurrBasket,
  item,
  item: { category_name, description, img_url, item_id, item_name, price },
}) {
  const { basket, setBasket } = useContext(BasketContext);

  const handleClick = (e) => {
    e.preventDefault();
    setBasket((currBasket) => {
      return [...currBasket, item];
    });
    setCurrBasket([...basket, item]);
  };
  return (
    <div className="w-60 min-h-80 mx-auto border-spacing-2 border-4 p-4 text-sm">
      {item_name}
      <p>ID : {item_id}</p>
      <ol className="grid grid-flow-col">
        <li>Category: {category_name}</li>
        <li>Description: {description}</li>
        <li>Price: {price}</li>
      </ol>
      <img src={img_url} alt={item_name} className="w-full h-40" />
      <span className="flex justify-center mt-8">
        <button
          onClick={handleClick}
          value={item}
        >
          Add to Basket
        </button>
      </span>
    </div>
  );
}
