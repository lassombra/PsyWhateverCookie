import React from 'react';
import store from './redux';
import { Provider } from 'react-redux'

export default class App extends React.Component {
	render() {
		return <Provider store={store}>
			<table>
				<tr>
					<td colSpan="4">Score: 0</td>
				</tr>
				<tr>
					<td>Cookie will be here</td>
					<td colSpan="2">Upgrades will be here</td>
					<td>Upgrade purchase will be here</td>
				</tr>
			</table>
		</Provider>
	}
}