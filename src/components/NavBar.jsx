import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="bg-gray-100 py-4">
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
    </div>
  );
}
