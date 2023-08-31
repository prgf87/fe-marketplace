import React, { useMemo } from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import SingleItem from "./SingleItem";
import Categories from "./Categories";
import ItemSellForm from "./ItemSellForm";

export default function ItemList() {
  const [itemList, setItemList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [category, setCategory] = useState();

  useEffect(() => {
    axios
      .get("https://nc-marketplace-sem-2.onrender.com/api/items")
      .then(({ data }) => {
        setItemList(data.items);
      });
  }, [category]);

  function getFilteredList() {
    if (!category) {
      return itemList;
    }
    return itemList.filter((item) => item.category_name === category);
  }

  var filteredList = useMemo(getFilteredList, [category, itemList]);

  return (
    <div>
      <Categories
        setCategory={setCategory}
        categoryList={categoryList}
        setCategoryList={setCategoryList}
      />
      <ItemSellForm categoryList={categoryList} />
      <section className="item">
        {filteredList.map((item) => {
          return <SingleItem item={item} key={item.item_id} />;
        })}
      </section>
    </div>
  );
}
