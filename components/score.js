import React from 'react';
import {connect} from 'react-redux';
import Number from '../number';

export default connect(
	state => ({
		score: state.currentScore,
		click: state.clickScore,
		second: state.perSecondScore
	})
)(function score({score, click, second}) {
	return <span>Cookies: <Number number={score} />, <Number number={click} /> per click, <Number number={second} /> per second</span>;
});