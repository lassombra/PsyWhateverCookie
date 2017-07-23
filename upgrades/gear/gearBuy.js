import React from 'react';
import {connect} from 'react-redux';
import cost from './cost';
import {Actions} from '../../redux';

@connect(
	state => ({
		count: state.upgrades ? state.upgrades.gear.count : 0,
		price: cost(state.upgrades ? state.upgrades.gear.count : 0)
	})
)
export default class GearBuy extends React.Component {
	render() {
		return <li className="GearPurchase"><img src="" /> A set of adventure gear to help you collect more cookies per click.  (Increase cookies per click by 1).  cost: {this.props.price} cookie. <button onClick={() => Actions.sell('gear')}>-</button> {this.props.count} <button onClick={() => Actions.buy('gear')}>+</button> </li>
	}
}