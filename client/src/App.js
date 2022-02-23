import './App.css';
import React, { Component } from 'react'
import {APIREQUESTS} from './utils/APIREQUESTS';


export class App extends Component {
  constructor(props){
    super(props) 
  }

  componentDidMount(){
    this.test()
  }

  test = () => {
     APIREQUESTS.post('/test', {name: "Fiifi"})
     .then(response=> 
      {
        APIREQUESTS.get('/')
        .then(response1=> {
          console.log(response1)
        })
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
