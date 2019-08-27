import React, { Component } from 'react'
import './App.css';
import BuildingList from './components/BuildingList';

export default class App extends Component {


  componentDidMount() {
    const path = window.location.pathname

    this.getData(path)
  }

  constructor(props) {
    super(props)
  
    this.state = {
       data: []
    }
  }

  getData = path => {
   return fetch(`http://localhost:3000${path}`).then(resp => resp.json()).then(resp => this.setState({data: resp}))
  }
  
  render() {
    return (
      <div>
        <BuildingList data ={this.state.data}/> 
      </div>
    )
  }
}
