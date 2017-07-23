import React from 'react';
import {List as Gear} from './gear';
import {List as Team} from './team';
import {List as Pendant} from './pendant';

export default class Owned extends React.Component {
	render() {
		return <ul>
			<Gear />
			<Team />
			<Pendant/>
		</ul>;
	}
}