import React from 'react';
import {Buy as GearBuy} from './gear';
import {Buy as TeamBuy} from './team';
import {Buy as Pendant} from './pendant';

export default class Buy extends React.Component {
	render() {
		return <ul>
			<GearBuy />
			<TeamBuy/>
			<Pendant />
		</ul>;
	}
}