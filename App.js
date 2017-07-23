import React from 'react';
import store from './redux';
import { Provider } from 'react-redux'
import Score from './components/score';
import Cookie from './components/cookie';
import {UpgradeList, UpgradePurchase} from './upgrades';

export default class App extends React.Component {
	render() {
		return <Provider store={store}>
			<table>
				<thead>
				<tr>
					<td colSpan="2"><Cookie/></td>
				</tr>
				</thead>
				<tbody>
				<tr>
					<td><Score /></td>
					<td><UpgradePurchase /></td>
				</tr>
				</tbody>
			</table>
		</Provider>
	}
}