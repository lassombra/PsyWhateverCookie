export default function reducer(state = {currentScore: 0, maxScore: 0, perSecondScore: 0, clickScore: 1}, action) {
	if (!action) {
		return state;
	}
	if (action.type == 'CLICK') {
		return {
			...state,
			currentScore: state.currentScore + (state.clickScore * 100),
			maxScore: state.maxScore + (state.clickScore * 100)
		};
	} else if (action.type == 'TICK') {
		return {
			...state,
			currentScore: state.currentScore + (state.perSecondScore * 100),
			maxScore: state.maxScore + (state.perSecondScore * 100)
		};
	}
	else return state;
}