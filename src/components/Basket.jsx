import React, { useContext, useState } from "react";
import { BasketContext } from "../utils/BasketContext";
import BasketItem from "./BasketItem";

export default function Basket() {
  const { basket } = useContext(BasketContext);

  return (
    <div className="grid grid-cols-4">
      {basket.map((item) => {
        console.log(item);
        return (
          <div>
            <BasketItem item={item} />
          </div>
        );
      })}
    </div>
  );
}
