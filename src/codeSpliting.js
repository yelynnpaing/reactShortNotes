import logo from './logo.svg';
import './App.css';
import React from 'react';
import Toolbar from './Toolbar'
import Header from './Header';

// class Title extends React.Component{
//   render(){
//     return(
//       <h1>{this.props.name}</h1>
//     )
//   }
// }

// class Header extends React.Component{
//   render(){
//     return(
//       <Title name = {this.props.name} />
//     )
//   }
// }

class App extends React.Component{
  render(){
    return (
      <div>
          <Toolbar>
            <header>
              <h1>Hello React</h1>
            </header>
              <p>Component Position</p>
          </Toolbar>
          
      </div>
    )
  }
}

export default App;

