import React from "react";
import { Link } from "react-router-dom";

export default function Header({ currUser, currBasket }) {
  return (
    <div className="bg-gray-100 py-4">
      <h1 className="text-3xl text-blue-500 text-center mb-4">Fleamarket</h1>
      <section className="mb-4">
        <section className="flex justify-between max-w-3xl mx-auto">
          <p className="user_text">{currUser.username} is logged in </p>
          <ul className="flex gap-x-4 justify-center">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/profile"}>Profile Page</Link>
            </li>
            <li>
              <Link to={"/users"}>Users Page</Link>
            </li>
          </ul>
          <Link to={`/${currUser.username}/basket`} className="user_text">
            Basket: {currBasket.length}
            {currBasket.length > 1 ? " items" : " item"}
          </Link>
        </section>
      </section>
      <p>
        Welcome barrow boys, rag and bone men to our emporium of rare
        delicacies, pre-loved gooddies and nick nacks
      </p>
    </div>
  );
}
