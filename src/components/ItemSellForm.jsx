import React from "react";
import {useState} from "react";

export default function ItemSellForm() {
  const [itemSellFormInput, setItemSellFormInput] = useState({})
  const [itemName, setItemName] = useState("")

  const [form, setForm] = useState({
      item_name: "",
      description: "",
      img_url: "",
      price: "",
      category_name: "",
      item_id: ""
    })
  


const handleChange = (evt) => {
  const value = evt.target.value;
  console.log(value)
  setItemName(value);
}

const handleSubmit = (e) => {
e.preventDefault();
console.log(form)
}  
  return (
    <>
      <form className="ItemSellForm" onSubmit={handleSubmit}>
        <label htmlFor="item_name">Item name:</label>    
        <input type="text" id="item_name" value={itemName} onChange={handleChange}></input>
        <label htmlFor="description">Description:</label>    
        <input id="description" value={form.description} onChange={handleChange}></input>
        <label htmlFor="img_url">Immage URL:</label>    
        <input id="img_url" value={form.img_url} onChange={handleChange}></input>
        <label htmlFor="price">Price:</label>    
        <input id="price" value={form.price} onChange={handleChange}></input>
        <label htmlFor="category_name">Category name:</label>    
        <input if="category_name" value={form.category_name} onChange={handleChange}></input>
        <button>Submit</button>
      </form>
    </>
  );
}
