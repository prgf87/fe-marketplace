import axios from "axios";
import React from "react";
import { useState } from "react";

export default function ItemSellForm({ categoryList }) {
  const [form, setForm] = useState({
    item_name: "",
    description: "",
    img_url: "",
    price: "",
    category_name: "",
  });

  function handleChange(evt) {
    const value = evt.target.value;

    setForm({
      ...form,
      [evt.target.name]: value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    postItem(form);
  };

  const postItem = (form) => {
    axios
      .post("https://nc-marketplace-sem-2.onrender.com/api/items", form)
      .then((response) => {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <form className="ItemSellForm" onSubmit={handleSubmit}>
        <label htmlFor="item_name">Item name:</label>
        <input
          type="text"
          id="item_name"
          name="item_name"
          value={form.item_name}
          onChange={handleChange}
          required
        ></input>
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          name="description"
          value={form.description}
          onChange={handleChange}
        ></input>
        <label htmlFor="img_url">Image URL:</label>
        <input
          type="text"
          id="img_url"
          name="img_url"
          value={form.img_url}
          onChange={handleChange}
          required
        ></input>
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          name="price"
          value={form.price}
          onChange={handleChange}
          required
        ></input>
        <label htmlFor="category_name">Category name:</label>

        <select
          value={form.category_name}
          id="category_name"
          name="category_name"
          onChange={handleChange}
        >
          {categoryList.map((item, i) => {
            form.category_name = item.category_name;
            return (
              <option key={i} value={item.category_name}>
                {item.category_name}
              </option>
            );
          })}
        </select>
        <button>Submit</button>
      </form>
    </>
  );
}
