import React, { useContext, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { ApiContext } from '../context/api/apiContext';
import { CompareContext } from '../context/compare/compareContext';
import { TableCompareList } from '../components/Compare/TableCompareList';
import { findIndexById } from '../helpers/common';

export const Compare = () => {
	const [ships, setShips] = useState([]);
	const { getDataFromAPI } = useContext(ApiContext);
	const { compareArr } = useContext(CompareContext);

	useEffect(() => {
		getDataFromAPI().then(data => setShips(data));	
	}, [getDataFromAPI]);

	let content;
	if (ships.length) {
		const compareArrWihtFullObjects = compareArr.map(el => ships[findIndexById(el.id, ships)]);

		if (!compareArrWihtFullObjects.length) {
			content = (
				<div style={{textAlign: 'center'}}>
					<h4>There is nothing to compare</h4>
					<p>Add star-ships from the form above or <Link to="/">home page</Link> home page</p>
				</div>
			);
		} else {
			content = <TableCompareList tableData={compareArrWihtFullObjects} />;
		}
		
	} else {
		content = <h4>Loading...</h4>;
	}
	
	
	return (
		<>
			<h1>Compare ships</h1>
			<hr/>
			{ content }
		</>
	)
}