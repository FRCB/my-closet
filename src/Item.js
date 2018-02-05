import React from "react";

function Item(props) {
  return (
    <div className="item">
      {/*grab type off the props object*/}{" "}
      <div style={{ /*grab color off the props object and set to backgroundColor*/ }} className="item-color" />
      <button>X</button>
    </div>
  );
}

export default Item;
