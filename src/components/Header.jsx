import React from "react";
import Navbar from "./NavBar";
import { Link } from "react-router-dom";

export default function Header({ currUser, currBasket }) {
  return (
    <>
      <h1 className="text-3xl text-blue-500 text-center">Fleamarket</h1>
      <section className="absolute left-0 right-0 top-[50px]">
        <section className="flex justify-between">
          <p className="user_text">{currUser.username} is logged in </p>
          <Link to={`/${currUser.username}/basket`} className="user_text">
            Basket: {currBasket.length}
            {currBasket.length > 1 ? "items" : "item"}
          </Link>
        </section>
      </section>
      <Navbar />
      <p>
        Welcome barrow boys, rag and bone men to our emporium of rare
        delicacies, pre-loved gooddies and nick nacks
      </p>
    </>
  );
}
