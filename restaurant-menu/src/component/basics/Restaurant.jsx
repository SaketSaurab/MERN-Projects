import React, { useState } from "react";
import "./Restaurant.css";
import Menu from "./menuApi";
import Card from "./Card";

const Restaurant = () => {
  const[menuData,setMenuData]=useState(Menu);
  return (
    <>
<nav className="navbar">
  <div className="btn-group">
    <button className="btn-group-item">Breakfast</button>
    
    <button className="btn-group-item">Lunch</button>
    
    <button className="btn-group-item">Dinner</button>
  </div>
</nav>


<div className="main-card-container">
  <Card menuData={menuData}/>
</div>

    </>
  );
};

export default Restaurant;
