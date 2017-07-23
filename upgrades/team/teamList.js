import React from 'react';
import {connect} from 'react-redux';

@connect(state => ({
	count: state.upgrades.team.count
}))
export default class GearOwned extends React.Component {
	render() {
		return <li className="Gear">{this.props.count}</li>
	}
}