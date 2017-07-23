import React from 'react';
import {connect} from 'react-redux';

@connect(state => ({
	count: state.upgrades.gear.count
}))
export default class GearOwned extends React.Component {
	get gearPieces() {
		return [...this.gearPieceMaker()]
	}
	render() {
		return <li className="Gear">{this.gearPieces}</li>
	}
	*gearPieceMaker() {
		for (let i = 0; i < this.props.count && i < 25; i++) {
			yield <icon className="Gear__Icon" key={i} />
		}
    }
}