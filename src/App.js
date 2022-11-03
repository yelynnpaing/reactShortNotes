import logo from './logo.svg';
import './App.css';
import React from 'react';

class Title extends React.Component{
  render(){
    return(
      <h1>{this.props.name}</h1>
    )
  }
}

class Header extends React.Component{
  render(){
    return(
      <Title name = {this.props.name} />
    )
  }
}

class App extends React.Component{
  render(){
    return (
      <div className= "App-header " >
        <Header name = "Hello Ract" />
      </div>
    )
  }
}

export default App;

