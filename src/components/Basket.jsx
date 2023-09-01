import React, { useContext, useEffect, useState } from "react";
import { BasketContext } from "../utils/BasketContext";
import { UserContext } from "../utils/UserContext";
import BasketItem from "./BasketItem";

export default function Basket() {
  const [userBasket, setUserBasket] = useState(BasketContext);
  const { user, setUser } = useContext(UserContext);
  const { basket, setBasket } = useContext(BasketContext);
  console.log(basket.items);

  //useEffect(() => {}, []);

  return (
    <div>
      heelo
      {basket.items.map((basket) => {
        return <BasketItem basket={basket} />;
      })}
    </div>
  );
}
