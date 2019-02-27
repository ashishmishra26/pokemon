import React, { Component } from 'react'
import capitalize from '../lib/Capitalize'

export default class Card extends Component {
    constructor(props){
        super(props);
        this.state= {
            content: '',
            clicked: false
        };
    }
    render() {
        let { name } = this.props,
        content = this.state.content,
        table = [];

      table = this.createTable(content);

      return (
        <div className={this.state.clicked ? 'card-container' : 'card-container-small'}>
          <div className={this.state.clicked ? 'card-header' : 'card-header-small'}>
              <p>{capitalize(name)}</p>
              <p className="expand-icon" onClick={()=>{this.handleClick(this.state.clicked)}}> {this.state.clicked ? '-' : '+'}</p>
          </div>
          <div className={this.state.clicked ? 'card-content' : 'card-content-small'}>
            <div className={this.state.clicked ? 'data-table' : 'data-table-hidden'}>{table}</div>
          </div>
        </div>
      )
    }

  async getContent (url) {
    await fetch(url).then(response => response.json()).then(response => {
        this.setState({content: response});
    });
  }

  createTable (content) {
    let table = [], ability = [], moves = [];
    if (Object.keys(content).length) {
      table.push(
        <React.Fragment key={content.name+content.weight}>
          <h4>Weight</h4>
          <h5 key={content.name+content.weight}>{content.weight}</h5>
        </React.Fragment>
      );
      table.push(
        <React.Fragment key={content.weight+content.height}>
          <h4>Height</h4>
          <h5 key={content.name+content.height}>{content.height}</h5>
        </React.Fragment>
      );
      table.push(
        <React.Fragment key={content.name+content.base_experience}>
          <h4>Experience</h4>
          <h5 key={content.name+content.base_experience}>{content.base_experience}</h5>
        </React.Fragment>
      );

      content.abilities.forEach(abil => {
        ability.push(<h5 key={content.name+abil.ability.name}>{abil.ability.name}</h5>);
      });

      table.push(
        <>
          <h4>Abilities</h4>
          {ability}
        </>
      );

      content.moves.forEach(move => {
        moves.push(<h5 key={content.name+move.move.name}>{move.move.name}</h5>);
      });

      table.push(
        <>
          <h4>Moves</h4>
          {moves}
        </>
      );
    }
    return table;
  }

  handleClick (value) {
      this.getContent(this.props.url);
      this.setState({clicked: !value});
  }
}
