import React from "react";
import "./Card.css"
const Card = ({ list }) => {
  
  return (
    <div>
      {list.length === 0 ? (
        <p>No hay usuarios .</p>
      ) : (
        list.map((item, index) => (
          <article key={index}>
            <h4>{item.name}</h4>
            <p>Edad: {item.age}</p>
            {item.url_image && <img src={item.url_image}/>}

          </article>
        ))
      )}
    </div>
  );
};

export default Card;

