import BetType from './BetType.js'

class Odds {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
  static BET_TYPE_TO_ODDS = new Map();

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Class_static_initialization_blocks
  static {
    this.BET_TYPE_TO_ODDS.set(BetType.STRAIGHT, 35);
    this.BET_TYPE_TO_ODDS.set(BetType.SPLIT, 17);
    this.BET_TYPE_TO_ODDS.set(BetType.STREET, 11);
    this.BET_TYPE_TO_ODDS.set(BetType.CORNER, 8);
    this.BET_TYPE_TO_ODDS.set(BetType.LINE, 5);
    this.BET_TYPE_TO_ODDS.set(BetType.COLUMN, 2);
    this.BET_TYPE_TO_ODDS.set(BetType.DOZEN, 2);
    this.BET_TYPE_TO_ODDS.set(BetType.RED_OR_BLACK, 1);
    this.BET_TYPE_TO_ODDS.set(BetType.ODD_OR_EVEN, 1);
    this.BET_TYPE_TO_ODDS.set(BetType.LOW_OR_HIGH, 1);
  };
}

export default Odds;
