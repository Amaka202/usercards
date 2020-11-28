import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import UserCard from "./UserCard";


export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      userArr: [],
      searchInput: ""
    }
  }

  handleChange = (e) => {
    this.setState({
      searchInput: e.target.value
    }, () => console.log("inpute test", this.state.searchInput))
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

    const filteredUser = this.state.userArr.filter(user => {
      return user.username.toLowerCase().includes(this.state.searchInput)
    })

    return (
      <div>
        <div className="intro">
          <h2>Users and their details</h2>
        </div>
        {/* <input type="text" placeholder="Search by username" onChange={this.handleChange}/> */}
        <div className="users">
          {userArray}
        </div>
      </div>
    );
  }
}


