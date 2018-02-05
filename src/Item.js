import React from "react";

function Item(props) {
  return (
    <li>
      {props.type}{" "}
      <span style={{ backgroundColor: props.color }} className="item-color" />
    </li>
  );
}

export default Item;
