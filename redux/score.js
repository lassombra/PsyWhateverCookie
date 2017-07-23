export default function reducer(state = {currentScore: 0, maxScore: 0, perSecondScore: 0, clickScore: 1}, action) {
	if (!action) {
		return state;
	}
	if (action.type == 'CLICK') {
		return {
			...state,
			currentScore: state.currentScore + state.clickScore,
			maxScore: state.maxScore + state.clickScore
		};
	} else if (action.type == 'TICK') {
		return {
			...state,
			currentScore: state.currentScore + state.perSecondScore,
			maxScore: state.maxScore + state.perSecondScore
		};
	}
	else return state;
}