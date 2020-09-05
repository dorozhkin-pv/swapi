import React, { useContext } from 'react';
import image from '../../img/star-ship.jpg';
import { Button } from 'react-bootstrap';
import { CompareContext } from '../../context/compare/compareContext';

export const TableRow = ({ data }) => {
	const { remove } = useContext(CompareContext);

	return (
		<tr className="table__row">
			<td className="table__col">{ data.name } <Button variant="danger" onClick={ () => remove(data.id) }>&times;</Button></td>
			<td className="table__img"><img className="table__image" src={ image } alt="logo"/></td>
			<td className="table__col">{ data.model }</td>
			<td className="table__col">{ data.manufacturer }</td>
			<td className="table__col">{ data.cost_in_credits }</td>
			<td className="table__col">{ data.length }</td>
			<td className="table__col">{ data.max_atmosphering_speed }</td>
			<td className="table__col">{ data.crew }</td>
			<td className="table__col">{ data.passengers }</td>
			<td className="table__col">{ data.cargo_capacity }</td>
			<td className="table__col">{ data.consumables }</td>
			<td className="table__col">{ data.hyperdrive_rating }</td>
			<td className="table__col">{ data.MGLT }</td>
			<td className="table__col">{ data.starship_class }</td>
		</tr>
	)
}
