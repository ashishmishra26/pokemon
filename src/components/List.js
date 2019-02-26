import React, { Component } from 'react'
import Card from './Card';

export default class List extends Component {
  render() {
      let { data, searchText } = this.props,
      pokemons = [];

      if (Object.keys(data).length) {
        data.forEach(pokemon => {
          if (pokemon.name.toLowerCase().indexOf(searchText) !== -1) {
            pokemons.push(<Card key={pokemon.name} name={pokemon.name} url={pokemon.url}/>)
          } 
        });
      }

    return (
      <div className="list">
        {pokemons}
      </div>
    )
  }
}
