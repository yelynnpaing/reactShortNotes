import logo from './logo.svg';
import './App.css';
import React from 'react';

// class component AddItems
class Items extends React.Component{
  render(){
    return (
      <li>
        {this.props.name},
        ${this.props.price}
      </li>
    )
  }
}

/* 
functional Component

const Items = props => {
  return(
    <li>
        {props.name},
        {props.price}
    </li>
  )
}

//destructuring 
const Items = ({name, price}) =>(
    <li>
      {name}, ${price}
    </li>
)


*/

class AddForm extends React.Component{
  nameRef = React.createRef();
  priceRef = React.createRef();
  add = () => {
    let name = this.nameRef.current.value;
    let price = this.priceRef.current.value;

    if(name === ""){
      alert("To Type in input text Area !")
    }else{
    this.props.add(name, price)
    this.nameRef.current.value = null
    this.priceRef.current.value = null
    }
  }
  render(){
    return(
      <>
        <input type="text" ref={this.nameRef} /> <br/>
        <input type = "text" ref= {this.priceRef} /> <br/>
        <button onClick={this.add}>Add</button>
      </>
    )
  }
}

class App extends React.Component{
  state = {
    items : [
      {id : "1", name : "apple", price : "9"  },
      {id : "2", name : "orange", price : "7"  }
    ]
  }

  add = (name, price) => {
    let id = this.state.items.length + 1;
    this.setState({
      items : [
        ...this.state.items,
        // {id, name: `${this.id}` , price: 0.1 * id}
        {id, name, price}
      ]
    });
    
  }

  render(){
    return (
      <div>
        <h1>Hello React</h1>
        <ul>
          {
            this.state.items.map(i => {
              return(
                <Items 
                  key={i.id}
                  name = {i.name}
                  price = {i.price}
                />
              )
            })
          }
        </ul>
        <AddForm add = {this.add} />
      </div>
    )
  }
}

export default App;
