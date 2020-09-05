import React from 'react';
import { ListGroup} from 'react-bootstrap';

export const ListItem = ({ cliclHandler, item }) => {
  return (
    <ListGroup.Item className="search__list-item"
                    onClick={() => cliclHandler(item.id)}
    >
      { item.name }
    </ListGroup.Item>
  )
}
