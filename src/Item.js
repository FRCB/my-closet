import React from "react";

function Item(props) {
  return (
    <li>
      {/*grab type off the props object*/}{" "}
      <span style={{ /*grab color off the props object and set to backgroundColor*/ }} className="item-color" />
    </li>
  );
}

export default Item;
