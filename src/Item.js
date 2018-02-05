import React from "react";

function Item(props) {
  return (
    <div className="item">
      {props.type}{" "}
      <div style={{ backgroundColor: props.color }} className="item-color" />
      <button className="delete">X</button>
    </div>
  );
}

export default Item;
