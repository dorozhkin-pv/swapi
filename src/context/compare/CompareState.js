import React, { useReducer } from 'react';
import { CompareContext } from './compareContext';
import { compareReducer } from './compareReducer';
import { ADD_COMPARE, REMOVE_COMPARE } from '../types';

export const CompareState = ({children}) => {
	const [compareArr, dispatch] = useReducer(compareReducer, []);

	const add = id => {
		dispatch({
			type: ADD_COMPARE,
			payload: [{id}]
		});
	}

	const remove = id => {
		dispatch({
			type: REMOVE_COMPARE,
			payload: id
		});
	}

	return (
		<CompareContext.Provider value={{
			add, remove, compareArr
		}}>
			{ children }
		</CompareContext.Provider>
	)
}