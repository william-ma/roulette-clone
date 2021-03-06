import React from 'react';

class BettingTile extends React.Component {

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
        {this.props.id}
      </button>
    );
  }

}

export default BettingTile;
