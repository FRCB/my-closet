import React, {Component} from "react"
import Item from "./Item"

import "./App.css"

class App extends Component {
  constructor(){
    super()
    this.state = {
      input: "",
      colorInput: "",
      inventory: [{type: "Shirt", color: "blue"}, {type: "pants", color: "brown"}]
    }
  }

  render(){

    let items = this.state.inventory.map((clothing, index) => {
      return (
        <Item type={clothing.type}
              color={clothing.color}
        />

      )
    })


    return (
      <div>
        <h2>Add Item:</h2>
        <input placeholder="item name" value={this.state.input} />
        <input type="color" value= {this.state.colorInput} />
        <button>Add</button>

        <h2>Inventory</h2>
        <ul>
        {items}
        </ul>


      </div>
    )
  }



}

export default App


