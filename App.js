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
				<tr>
					<Score />
				</tr>
				<tr>
					<td><Cookie/></td>
					<td colSpan="2"><UpgradeList /></td>
					<td><UpgradePurchase /></td>
				</tr>
			</table>
		</Provider>
	}
}