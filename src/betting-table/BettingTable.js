import React from 'react';
import BettingTile from './BettingTile'

/**
 * Responsible for controlling all the BetTiles.
 * Handling amount of bets...
 */
class BettingTable extends React.Comonent {

  constructor(props) {
    super(props)
    this.handleClickBet = this.handleClickBet.bind(this);
  }

  handleClickBet(event, id) {
    console.log("test");
    event.preventDefault();
  }

  render() {
    return (
      <div id="BettingTable">
        <b>Is this showing?</b>
        // <BettingTile id="test" onClick={this.handleClickBet} />
      </div>
    );
    // A background image of the roulette Table
    // on top of it... <div> a bunch of betting tiles...
  }

}

export default BettingTable;
