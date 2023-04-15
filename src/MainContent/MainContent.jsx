import { movies } from "../utils/constants";
import Button from "../Button/Button";
// import { DeleteMovie } from "../delete/DeleteMovie";
// import {Delete  } from "../delete/Delete";
// import { useState } from "react";
function MainContent({ el, onDelete }) {
    const data =  el
  return (
    <div className="movies_cart">
      {movies.map((item) => (
        <div className="cart">
          <img src={item.img} alt="" />
          <h2>{item.title} </h2>
          <div className="cart_button_list">
            <div className="rating">{item.rating} sares</div>
           
          
            <Button
              userColor={"red"}
              userTitle={"DELETE"}
              onClick={() => onDelete(el.id )}
              
            />
            <Button userColor={"blue"} userTitle={"EDIT"} />
            {/* <DeleteMovie /> */}
           
          </div>
        </div>
      ))}
    </div>
  );
}
export default MainContent;
