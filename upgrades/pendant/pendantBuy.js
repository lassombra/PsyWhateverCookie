import React from 'react';
import {connect} from 'react-redux';
import cost from './cost';
import {Actions} from '../../redux';
import Number from '../../number';

@connect(
	state => ({
		count: state.upgrades ? state.upgrades.pendant.count : 0,
		price: cost(state.upgrades ? state.upgrades.pendant.count : 0)
	})
)
export default class GearBuy extends React.Component {
	render() {
		return <li className="TeamPurchase">
			<img src="images/Pendant1.png" title="A breeding pendant to help you get more pets to get more cookies.  (Increase cookies per second by 100 and cookies per click by .5 rounded down)" />
			<button onClick={() => Actions.sell('pendant')}>Sell one (lose 10%)</button>
			You own <Number number={this.props.count} />.
			<button onClick={() => Actions.buy('pendant')}>Buy one for <Number number={this.props.price} /> cookie{this.props.price != 1 ? 's' : ''}</button>
		</li>
	}
}