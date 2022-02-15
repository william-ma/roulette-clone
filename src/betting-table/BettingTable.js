import React from 'react';
import BettingTile from './BettingTile'

/**
 * Responsible for controlling all the BetTiles.
 * Handling amount of bets...
 */
class BettingTable extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      bet_amount: 1
    }

    this.handleClickBet = this.handleClickBet.bind(this);
  }

  handleClickBet(event, id) {
    console.log("I received a bet of " + this.state.bet_amount + " on. id '" + id + "'");
    event.preventDefault();
  }

  render() {
    return (
      <div className="BettingTable">
        <BettingTile id="test" onClick={this.handleClickBet} />
      </div>
    );
  }

}

export default BettingTable;
