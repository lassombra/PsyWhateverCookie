import React from 'react';
import {List as Gear} from './gear';

export default class Owned extends React.Component {
	render() {
		return <ul>
			<Gear />
		</ul>;
	}
}