import React, {Component} from "react"
// import child component here

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

  handleChange(e) {
    // update the value of input stored on the state object
  }

  chooseColor(e) {
    // update the value of colorInput stored on the state object
  }

  addItem() {
    // update the value of inventory stored on the state object
  }

  deleteItem(item) {
    // update the value of inventory stored on the state object to not include the passed in item
  }

  render(){

    let items = this.state.inventory.map((clothing, index) => {
      return (
        <div></div> //change to child component passing props
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


