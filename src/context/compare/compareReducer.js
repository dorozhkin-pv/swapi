import { ADD_COMPARE, REMOVE_COMPARE } from "../types";

const handlers = {
	[ADD_COMPARE]: (state, { payload }) => {
		return [...state, ...payload];
	},
	[REMOVE_COMPARE]: (state, { payload }) => {
		return state.filter(s => s.id !== payload);
	},
	DEFAULT: state => state
}

export const compareReducer = (state, action) => {
	const handle = handlers[action.type] || handlers.DEFAULT;
	return handle(state, action); 
}