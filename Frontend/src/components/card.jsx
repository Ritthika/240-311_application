import React from "react";


const Cards = ({ item, handleClick }) =>{
    const {title, price ,thumbnaiUrl} = item;
    return ( 
    <div className="cards">
        <div className="imge_box">
            <img src = {thumbnaiUrl} alt= ""  width="400px"/>
        </div>
        <div className ="details">
            <p>{title}</p>
            <p><h3 className="h3">ราคาใบละ</h3>{price}</p>
            <button onClick={() => handleClick(item)}>
                Add to Cart
            </button>
        </div>
    </div>);
};

export default Cards