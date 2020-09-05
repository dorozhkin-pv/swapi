import React, { useContext, useState, useEffect } from 'react';
import { ApiContext } from '../context/api/apiContext';
import { CompareContext } from '../context/compare/compareContext';
import { findIndexById, inArray } from '../helpers/common';
import { Button } from 'react-bootstrap';
import image from '../img/star-ship.jpg';

export const SwShip = props => {
	const id = +props.match.params.id;
	const [ships, setShips] = useState([]);
	const { getDataFromAPI } = useContext(ApiContext);
	const { compareArr, add, remove } = useContext(CompareContext);

	useEffect(() => {
		getDataFromAPI().then(data => setShips(data));	
	}, [getDataFromAPI]);

	let content;
	if (ships.length) {
		const ship = ships[findIndexById(id, ships)];

		let btn;
		if (inArray(ship.id, compareArr)) {
			btn = <Button variant="danger" onClick={() => remove(ship.id)}>Remove</Button>;
		} else {
			btn = <Button variant="primary" onClick={() => add(ship.id)}>Add to compare</Button>;
		}

		content = (
			<div className="ship">
				<div className="ship__content">
					<div className="ship__logo">
						<img className="ship__img" src={ image } alt="ship"/>
						{ btn }
					</div>
					<div className="ship__params">
						<h1>{ship.name}</h1>
						<p><strong>model: </strong>{ship.model}</p>
						<p><strong>manufacturer: </strong>{ship.manufacturer}</p>
						<p><strong>cost: </strong>{ship.cost_in_credits}</p>
						<p><strong>length: </strong>{ship.length} meters</p>
						<p><strong>max atmosphering speed: </strong>{ship.max_atmosphering_speed}</p>
						<p><strong>crew: </strong>{ship.crew}</p>
						<p><strong>passengers: </strong>{ship.passengers}</p>
						<p><strong>cargo: </strong>{ship.cargo_capacity}</p>
						<p><strong>consumables: </strong>{ship.consumables}</p>
						<p><strong>hyperdrive rating: </strong>{ship.hyperdrive_rating}</p>
						<p><strong>MGLT: </strong>{ship.MGLT}</p>
						<p><strong>starship class: </strong>{ship.starship_class}</p>
					</div>
				</div>
			</div>
		)
	} else {
		content = <h4>Loading...</h4>;
	}

	return (
		<>
			{ content }
		</>
	)
}
