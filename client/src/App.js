import './App.css';
import React, { Component } from 'react'
import endpoints from './utils/endpoints';
import axios from 'axios'
import APIs from './utils/APIREQUESTS';

const APIRequests = new APIs()

export class App extends Component {
  constructor(props){
    super(props) 
  }

  componentDidMount(){
    this.test()
  }

  test = () => {
     APIRequests.post('/test', {name: "Fiifi"})
     .then(response=> 
      {
        console.log(response)
      })
  }

  render() {
    return (
      <div>App</div>
    )
  }
}


export default App;
