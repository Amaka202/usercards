import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import UserCard from "./UserCard";


export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      userArr: []
    }
  }

  componentDidMount(){
    fetch("http://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            userArr: result
          })
        }
      )}

      

  render() {
    const userArray = this.state.userArr.map(val =>   <UserCard key={val.id} userArr={val}/>
    )

    return (
      <div>
        <div className="intro">
          <h2>Users and their details</h2>
        </div>
        <div className="users">
          {userArray}          
        </div>
      </div>
    );
  }
}


