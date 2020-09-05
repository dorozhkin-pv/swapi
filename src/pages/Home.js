import React, { useContext, useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { ShipCard } from '../components/ShipCard';
import { ApiContext } from '../context/api/apiContext';

export const Home = () => {
	const [starShips, setStarShips] = useState([]);
	
	const { getDataFromAPI } = useContext(ApiContext);

	useEffect(() => {
		getDataFromAPI().then(data => {
			const starShips = data.map(starShip => <ShipCard ship={starShip} key={starShip.name} />);
			setStarShips(starShips);
		});
  }, [getDataFromAPI]);

	let content;

	if (starShips.length) {
		content = <Row>{ starShips }</Row>;
	} else {
		content = <h4>Loading...</h4>;
	}
	
	return (
		<>
			<h1>StarShips list</h1>
			<hr/>
			{ content }
		</>
	)
}
