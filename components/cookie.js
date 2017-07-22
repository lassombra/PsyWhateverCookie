import React from 'react';
import {Actions} from '../redux';

export default class Cookie extends React.Component {
	render() {
		return <button className="Cookie" onClick={Actions.click}/>;
	}
}