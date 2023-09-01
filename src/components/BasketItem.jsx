import React from "react";

export default function BasketItem({ item }) {
  return (
    <div className="grid border-2 border-black">
      <p>{item.item_name}</p>
      <p>{item.description}</p>
      <p>{item.item_name}</p>
      <p>{item.price}</p>
      <img src={item.img_url}></img>
    </div>
  );
}
