import React from 'react';

class BettingTile extends React.Comonent {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.props.onClick(event, this.props.id);
  }

  render() {
    return (
      <button className="BettingTile" onClick={this.handleClick}>
        bet
      </button>
    );
  }

}

export default BettingTile;
