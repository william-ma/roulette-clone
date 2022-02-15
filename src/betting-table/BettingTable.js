import React from 'react';
import BettingTile from './BettingTile'
import BetType from './BetType'
import Odds from './Odds'

/**
 * Responsible for controlling all the BetTiles.
 * Handling amount of bets...
 */
class BettingTable extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      "bet_amount": 1,
      "bets": this.initBets()
    }

    this.handleClickBet = this.handleClickBet.bind(this);
  }

  initBets() {

    var bets = [];

    for (let i = 0; i <= 36; i++) {
      bets.push({
          "id": BetType.STRAIGHT + i,
          "amount": 0,
          "type": BetType.STRAIGHT,
          "numbers": i
      });
    }

    return bets;
  }

  handleClickBet(event, id) {
    console.log("I received a bet of " + this.state.bet_amount + " on. id '" + id + "'");
    event.preventDefault();
  }

  render() {
    var insideBets = [];
    this.state.bets.forEach(bet => {
      this.insideBets.push(<BettingTile id={bet["id"]} onClick={this.handleClickBet} />);
    });
    console.log(this.insideBets);

    return (
      <div className="BettingTable">
        {insideBets}
      </div>
    );
  }

}

export default BettingTable;
