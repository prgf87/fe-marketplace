import React from 'react';
import {useEffect, useState} from 'react';
import axios from 'axios'
import SingleItem from './SingleItem';


export default function ItemList() {
    const [itemList, setItemList] = useState([]) 
    useEffect(() => {
        axios.get('https://nc-marketplace-sem-2.onrender.com/api/items').then(({data}) =>{
            setItemList(data.items);
        })
    }, []);
    console.log(itemList)
  return (
    <div>Item List:
        <section className="item">
            {itemList.map((item) => {
                return (
                    <SingleItem item={item} key={item.item_id} />
                )
            })}
        </section>
    </div>
  )
}
