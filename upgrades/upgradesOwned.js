import React from 'react';
import {List as Gear} from './gear';
import {List as Team} from './team';

export default class Owned extends React.Component {
	render() {
		return <ul>
			<Gear />
			<Team />
		</ul>;
	}
}