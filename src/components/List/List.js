import React from 'react';
import { ListGroup} from 'react-bootstrap';
import { ListItem } from './ListItem';

export const List = ({ found, cliclHandler }) => {
  
  let content;

  content = found.map(item => <ListItem  key={ item.id } item={ item } cliclHandler={ cliclHandler } />)

  return (
    <ListGroup className="search__list">
      { content }
    </ListGroup>
  )
}
