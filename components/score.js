import React from 'react';
import {connect} from 'react-redux';

export default connect(
	state => ({
		score: state.currentScore
	})
)(function score({score}) {
	return <td colSpan="4">Score: {score}</td>;
});