import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  state = {
    playersData: []
  }
  componentDidMount() {
    axios
    .get('http://localhost:5000/api/players')
    .then(res => {
      const playersData = res.data;
      console.log(playersData)
    })
  }
  render(){
    return (
    <div className="App">
      
    </div>
  )
}
}

export default App;
