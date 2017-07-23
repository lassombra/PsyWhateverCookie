import React from 'react';
import {connect} from 'react-redux';
import cost from './cost';
import {Actions} from '../../redux';
import Number from '../../number';

@connect(
	state => ({
		count: state.upgrades ? state.upgrades.gear.count : 0,
		price: cost(state.upgrades ? state.upgrades.gear.count : 0)
	})
)
export default class GearBuy extends React.Component {
	render() {
		return <li className="GearPurchase">
			<img src="images/Bag.png" title="A set of adventure gear to help you collect more cookies per click.  (Increase cookies per click by 1)." />
			<button onClick={() => Actions.sell('gear')}>Sell one (lose 10%)</button>
			You own <Number number={this.props.count} />.
			<button onClick={() => Actions.buy('gear')}>Buy one for <Number number={this.props.price} /> cookie{this.props.price != 1 ? 's' : ''}</button>
		</li>
	}
}