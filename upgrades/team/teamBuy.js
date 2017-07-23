import React from 'react';
import {connect} from 'react-redux';
import cost from './cost';
import {Actions} from '../../redux';
import Number from '../../number';

@connect(
	state => ({
		count: state.upgrades ? state.upgrades.team.count : 0,
		price: cost(state.upgrades ? state.upgrades.team.count : 0)
	})
)
export default class GearBuy extends React.Component {
	render() {
		return <li className="TeamPurchase"><img src="" />
			<img src="images/Goggles.png" title="A team of SCAV adventurers collecting cookies for reward.  (Increase cookies per second by 10)" />
			<button onClick={() => Actions.sell('team')}>Sell one (lose 10%)</button>
			You own <Number number={this.props.count} />.
			<button onClick={() => Actions.buy('team')}>Buy one for <Number number={this.props.price} /> cookie{this.props.price != 1 ? 's' : ''}</button>
		</li>
	}
}