import React from 'react';
import store from './redux';
import { Provider } from 'react-redux'
import Score from './components/score';
import Cookie from './components/cookie';

export default class App extends React.Component {
	render() {
		return <Provider store={store}>
			<table>
				<tr>
					<Score />
				</tr>
				<tr>
					<td><Cookie/></td>
					<td colSpan="2">Upgrades will be here</td>
					<td>Upgrade purchase will be here</td>
				</tr>
			</table>
		</Provider>
	}
}