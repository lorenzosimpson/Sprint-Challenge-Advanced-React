import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Header from './components/Header'
import CardContainer from './components/CardContainer'

class App extends React.Component {
  state = {
    playersData: []
  }
  componentDidMount() {
    axios
    .get('http://localhost:5000/api/players')
    .then(res => {
      this.setState({
        playersData: res.data
      })
    })
    .catch(err => console.log(err))
  }
  render(){
    return (
    <div className="App">
      <Header />
      <CardContainer playersData={this.state.playersData} />
    </div>
  )
}
}

export default App;
