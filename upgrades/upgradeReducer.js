import {cost as gearCost, count as gearCount} from './gear';
import {cost as teamCost, count as teamCount} from './team';

const costMap = {
	gear: gearCost,
	team: teamCost
};
export function calc(state, action) {
	if (action && action.type == 'BUY' || action.type == 'SELL') {
		let gear = gearCount(state.upgrades.gear.count);
		let team = teamCount(state.upgrades.team.count);
		return {
			...state,
			perSecondScore: gear.perSecondScore + team.perSecondScore,
			clickScore: gear.clickScore + team.clickScore + 1
		};
	} else {
		return state;
	}
}

export function upgradeCount(state = {}, action) {
	if (action && action.type == 'BUY') {
		let cost = costMap[action.upgrade](state.upgrades[action.upgrade].count);
		if (state.currentScore >= cost) {
			return {
				...state,
				currentScore: state.currentScore - cost,
				upgrades: {
					...state.upgrades,
					[action.upgrade]: {
						count: state.upgrades[action.upgrade].count + 1
					}
				}
			};
		} else {
			return state;
		}
	}
	if (action && action.type == 'SELL') {
		// selling only returns 90% of purchase price
		let cost = Math.round(costMap[action.upgrade](state.upgrades[action.upgrade].count - 1) * .9, 0);
		if (state.upgrades[action.upgrade].count > 0) {
			return {
				...state,
				currentScore: state.currentScore + cost,
				upgrades: {
					...state.upgrades,
					[action.upgrade]: {
						count: state.upgrades[action.upgrade].count - 1
					}
				}
			}
		} else {
			return state;
		}
	}
	if (state.upgrades) {
		return state;
	}
	return {
		...state,
		upgrades: {
			gear: {
				count: 0
			},
			team: {
				count: 0
			}
		}
	};
}