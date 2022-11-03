import logo from './logo.svg';
import './App.css';
import React from 'react';

class Items extends React.Component{
  render(){
    return (
     <li>
        {this.props.name},
        {this.props.price}
     </li>
    )
  }
}

class App extends React.Component{ 
  state = {
    items : [
      {id : "1", name : "apple", price : "12"},
      {id : "2", name : "grape", price : "10"}
    ]
  }

  nameRef = React.createRef();
  priceRef = React.createRef();

  add = () => {
    let id = this.state.items.length + 1;
    let name = this.nameRef.current.value;
    let price = this.priceRef.current.value;

    if(name === ""){
      alert("Type in Input Area")
    }else {
      this.setState({
        items : [
          ...this.state.items,
          {id, name, price}
        ]
       })
    }
   
  }

  render(){
    return (
      <div>
        <h1>Hello React</h1>
        <ul>
          {
            this.state.items.map(i => {
              return (
                <Items
                  key = {i.id}
                  name = {i.name}
                  price = {i.price}
                />
              )
            })
          }
        </ul>
        <input type="text" ref={this.nameRef} />
        <input type="text" ref={this.priceRef} />
        <button onClick={this.add}>Add</button>
      </div>
    )
  }
}

export default App;
