/* eslint-disable no-loop-func */
import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import List from './components/List';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      data: {},
      searchText: ''
    }
  }

  render() {
    return (
      <div className="App">
       <Header searchText={this.state.searchText} handleSearchText={this.handleSearchText}/>
       <List data={this.state.data} searchText={this.state.searchText}/>
      </div>
    );
  }

  handleSearchText = (value) => {
    this.setState({searchText: value});
  }

  componentDidMount () {
    let allPokemons = [];
    fetch('https://pokeapi.co/api/v2/pokemon')
    .then(response => response.json())
    .then(async response => {
      if (response) {
        allPokemons = [...response.results];
        while (response.next) {
          response = await fetch(response.next).then(response => response.json());
          response && (allPokemons = [...allPokemons, ...response.results]);
        }
      }
      this.setState({data: allPokemons});
    })
  }
}

export default App;
