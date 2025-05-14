import React from "react";

const Card = ({ menuData }) => {
  // console.log(menuData);
  return (
    <>
      {menuData.map((curElem) => {
        const {id,image,name,description,category,price}=curElem;
        return (
          <div className="container-card" key={id}>
            <div className="food-name">
              <h2>{name}    </h2>
            </div>
            <div className="food-detail">
              <p>
                {description}
              </p>
              <p><strong>Category : {category}</strong></p>
              <p><strong>Price : {price}</strong></p>
            </div> 
            <div className="food-image">
             <img src={image} alt={name}/>
                </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
