import React from 'react';
import { Table } from 'react-bootstrap';
import { TBody } from './TBody';
import { TableRow } from './TableRow';

export const TableCompareList = ({ tableData }) => {
	const trArr = tableData.map(ship => <TableRow data={ship} key={ship.id} />);

	return (
		<div className="overflow">
			<Table className="table" striped bordered hover variant="dark">
				<TBody>
					{ trArr }
				</TBody>
			</Table>
		</div>
	)
}
