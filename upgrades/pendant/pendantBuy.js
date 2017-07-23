import React from 'react';
import {connect} from 'react-redux';
import cost from './cost';
import {Actions} from '../../redux';

@connect(
	state => ({
		count: state.upgrades ? state.upgrades.pendant.count : 0,
		price: cost(state.upgrades ? state.upgrades.pendant.count : 0)
	})
)
export default class GearBuy extends React.Component {
	render() {
		return <li className="TeamPurchase"><img src="" /> A breeding pendant to help you get more pets to get more cookies.  (Increase cookies per second by 100 and cookies per click by .5 rounded down).  cost: {this.props.price} cookies. <button onClick={() => Actions.sell('pendant')}>-</button> {this.props.count} <button onClick={() => Actions.buy('pendant')}>+</button> </li>
	}
}