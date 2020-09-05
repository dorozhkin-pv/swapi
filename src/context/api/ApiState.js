import React from 'react';
import { ApiContext } from './apiContext';
import { getData } from '../../helpers/api';

export const ApiState = ({children}) => {
	const getDataFromAPI = () => {
		const url = "http://swapi.dev/api/films/2/";

		return getData(url).then(data => {
			let promises = [];
	
			data.starships.forEach(starship => {
				promises.push(getData(starship));
			});
			
			return Promise.all(promises).then(data => {
				const starShips = data.map((starShip, index) => {
					starShip.id = index;
					return starShip;
				});
				return starShips;
			});
		});
	}

	return (
		<ApiContext.Provider value={{ getDataFromAPI }}>
			{ children }
		</ApiContext.Provider>
	)
}