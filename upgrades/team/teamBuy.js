import React from 'react';
import {connect} from 'react-redux';
import cost from './cost';
import {Actions} from '../../redux';

@connect(
	state => ({
		count: state.upgrades ? state.upgrades.team.count : 0,
		price: cost(state.upgrades ? state.upgrades.team.count : 0)
	})
)
export default class GearBuy extends React.Component {
	render() {
		return <li className="TeamPurchase"><img src="" /> A team of SCAV adventurers collecting cookies for reward.  (Increase cookies per second by 10).  cost: {this.props.price} cookies. <button onClick={() => Actions.sell('team')}>-</button> {this.props.count} <button onClick={() => Actions.buy('team')}>+</button> </li>
	}
}