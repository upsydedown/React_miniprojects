import React, {useState} from 'react';
import MenuCard from "./menuCard.js";
import Menu from "./menuAPI.js";
import Navbar from "./navbar.js"
import "./style.css";

const Unique = [...new Set(Menu.map((curElem) => {
  return curElem.category;
})
),"All",
]

const Restaurant = () => {
  const [menuData, setmenuData] = useState(Menu);
  const [menuList, setmenuList] = useState(Unique);

  const filterItem = (category) => {

if(category==="All"){
  setmenuData(Menu);
  return
}

    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });
    setmenuData(updatedList);
  };

  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList} />
      <MenuCard menuData={menuData} />
    </>
  )
}

export default Restaurant;