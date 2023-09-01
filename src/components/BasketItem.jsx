import React from "react";

export default function BasketItem({ basket }) {
  return (
    <div className="grid border-2 border-black">
      <p>{basket.item_name}</p>
      <p>{basket.description}</p>
      <p>{basket.item_name}</p>
      <p>{basket.price}</p>
      <img src={basket.img_url}></img>
    </div>
  );
}
