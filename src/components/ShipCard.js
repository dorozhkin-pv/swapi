import React, { useContext } from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { urlBuilder } from '../routes';
import { CompareContext } from '../context/compare/compareContext';
import { inArray } from '../helpers/common';
import image from '../img/star-ship.jpg';

export const ShipCard = ({ship}) => {

	const { compareArr, add, remove } = useContext(CompareContext);

	let btn;
	if (inArray(ship.id, compareArr)) {
		btn = <Button variant="danger" onClick={() => remove(ship.id)}>Remove</Button>;
	} else {
		btn = <Button variant="primary" onClick={() => add(ship.id)}>Add to compare</Button>;
	}
	
	return (
		<Col xs={12} md={6} xl={4} className="mb-4">
			<Card>
				<Card.Img variant="top" src={image} />
				<Card.Body>
					<Card.Title>{ship.name}</Card.Title>
					<Card.Text>
						<span><strong>Model:</strong> {ship.model}</span><br/>
						<span><strong>Manufacturer:</strong> {ship.manufacturer}</span><br/>
					</Card.Text>
					<Link to={urlBuilder('sw-ship', {id: ship.id})}>
						Get more...
					</Link>
				</Card.Body>
				{ btn }
			</Card>
		</Col>
	)
}

// "name": "EF76 Nebulon-B escort frigate",
// "model": "EF76 Nebulon-B escort frigate",
// "manufacturer": "Kuat Drive Yards",
// "cost_in_credits": "8500000",
// "length": "300",
// "max_atmosphering_speed": "800",
// "crew": "854",
// "passengers": "75",
// "cargo_capacity": "6000000",
// "consumables": "2 years",
// "hyperdrive_rating": "2.0",
// "MGLT": "40",
// "starship_class": "Escort ship",