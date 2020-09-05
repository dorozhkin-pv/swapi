import React, { useState, useContext, useEffect } from 'react';
import { Form, FormControl } from 'react-bootstrap';
import { ApiContext } from '../context/api/apiContext';
import { CompareContext } from '../context/compare/compareContext';
import { inString } from '../helpers/common';
import { List } from './List/List';

export const SearchForm = () => {
	const [value, setValue] = useState('');
	const [starShips, setStarShips] = useState([]);
	const { getDataFromAPI } = useContext(ApiContext);
	const { compareArr, add } = useContext(CompareContext);

	useEffect(() => {
		getDataFromAPI().then(data => setStarShips(data))
	}, [getDataFromAPI]);
	
	const changeHandler = (e) => {
		setValue(e.target.value);
	}

	const cliclHandler = id => {
		add(id);
		setValue('');
	}

	let found;
	if (starShips.length) {
		let searchArr = starShips.filter(starShip => {
			let truthy = compareArr.some(el => el.id === starShip.id);
			return !truthy;
		});

		found = searchArr.filter(ship => {
			return inString(ship.name.toLowerCase(), value.trim().toLowerCase());
		});
	}

	return (
		<Form inline className="search">
			<FormControl type="text"
									 placeholder="Search to compare" 
									 className="mr-sm-2" 
									 value={ value }
									 onChange={ e => changeHandler(e) }
			/>
		
		{ value && ( <List found={ found } cliclHandler={ cliclHandler } /> )}
		
		</Form>
	)
}
