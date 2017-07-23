import React from 'react';
import {connect} from 'react-redux';

@connect(state => ({
	count: state.upgrades.pendant.count
}))
export default class GearOwned extends React.Component {
	render() {
		return <li className="Pendant">{this.props.count}</li>
	}
}