import React, { useState } from "react";
import lotterys from "../../data/lotterys";
import Cards from "./card";
import "../components/amazon.css";

const Amazon = ({handleClick}) =>{
    return (
        <section>
            {lotterys.map((item) => 
                (<Cards key = {item.id} item ={item} handleClick ={handleClick}/> 
            ))}
        </section>
    );
};

export default Amazon;