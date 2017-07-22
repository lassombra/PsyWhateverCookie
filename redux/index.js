import { createStore } from 'redux'
import scoreReducer from './score';

/**
 * This is a reducer, a pure function with (state, action) => state signature.
 * It describes how an action transforms the state into the next state.
 *
 * The shape of the state is up to you: it can be a primitive, an array, an object,
 * or even an Immutable.js data structure. The only important part is that you should
 * not mutate the state object, but return a new object if the state changes.
 *
 * In this example, we use a `switch` statement and strings, but you can use a helper that
 * follows a different convention (such as function maps) if it makes sense for your
 * project.
 */

// planned structure
let state = {
	// current cookies available to spend
	currentScore: 0,
	// total cookies ever
	maxScore: 0,
	// rate of passive cookie growth
	perSecondScore: 0,
	// rate of active cookie growth
	clickScore: 0,
	// owned upgrades
	upgrades: {
		upgradeType: {
			// number of upgrades owned
			count: 0,
		}
	},
	// active "special" event
	event: {
		// amount to multiply normal production numbers by.  Every action that
		// applies numbers will multiply by this as well.
		multiplier: 0,
		// when the event should end.  Each tick action will check this and clear an
		// event if it's ended.  At the beginning of the tick.
		expiration: 0
	}
};
function reducer(state = {currentScore: 0, maxScore: 0, perSecondScore: 0, clickScore: 1}, action) {
	let ourState = scoreReducer(state, action);
	return ourState;
}

const store = createStore(reducer, typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;

export class Actions {
	static click() {
		store.dispatch({
			type: 'CLICK'
		});
	}
	static tick() {
		store.dispatch({
			type: 'TICK'
		});
	}
}