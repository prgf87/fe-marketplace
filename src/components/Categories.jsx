import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Categories({ setCategory, categoryList, setCategoryList }) {
  

  useEffect(() => {
    axios
      .get("https://nc-marketplace-sem-2.onrender.com/api/categories")
      .then(({ data }) => {
        setCategoryList(data.categories);
      });
  }, []);

  const handleClick = (e) => {
    setCategory(e.target.textContent);
  };

  return (
    <div>
      <ol className="flex gap-x-4 justify-center">
        {categoryList.map((item) => {
          return (
            <li key={item.category_name}>
              <button onClick={handleClick}>{item.category_name}</button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
