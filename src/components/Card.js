import React, { Component } from 'react'

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
        <div className={this.state.clicked ? 'card-container' : 'card-container-small'} onClick={()=>{this.handleClick(this.state.clicked)}}>
          <div className={this.state.clicked ? 'card-header' : 'card-header-small'}>
              <p>{name}</p>
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
    let table = [], ability = [];
    if (Object.keys(content).length) {
      table.push(
        <>
          <h4>weight</h4>
          <h5>{content.weight}</h5>
        </>
      );
      table.push(
        <>
          <h4>height</h4>
          <h5>{content.height}</h5>
        </>
      );
      table.push(
        <>
          <h4>experience</h4>
          <h5>{content.base_experience}</h5>
        </>
      );

      content.abilities.forEach(abil => {
        ability.push(<h5>{abil.ability.name}</h5>);
      });

      table.push(
        <>
          <h4>ability</h4>
          {ability}
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
