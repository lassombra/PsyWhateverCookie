import React from 'react';
import {Buy as GearBuy} from './gear';

export default class Buy extends React.Component {
	render() {
		return <ul>
			<GearBuy />
		</ul>;
	}
}