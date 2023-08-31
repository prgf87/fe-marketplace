import React from "react";

export default function SingleItem({
  item: { category_name, description, img_url, item_id, item_name, price },
}) {
  return (
    <div>
      Single Item: {item_name}
      <ol>
        <li>Category: {category_name}</li>
        <li>Description: {description}</li>
        <li>Price: {price}</li>
      </ol>
      <img src={img_url} alt={item_name} />
    </div>
  );
}
