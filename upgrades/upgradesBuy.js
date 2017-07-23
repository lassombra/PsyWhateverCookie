import React from 'react';
import {Buy as GearBuy} from './gear';
import {Buy as TeamBuy} from './team';

export default class Buy extends React.Component {
	render() {
		return <ul>
			<GearBuy />
			<TeamBuy/>
		</ul>;
	}
}