import React, { useState } from "react";
import "./Restaurant.css";
import Menu from "./menuApi";
import Card from "./Card";

const Restaurant = () => {
  const[menuData,setMenuData]=useState(Menu);
  return (
    <>
<Card menuData={menuData}/>

    </>
  );
};

export default Restaurant;
