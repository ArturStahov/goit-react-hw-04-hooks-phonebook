import React from 'react';
import {
  TaskList,
  TaskItem,
  TaskItemElements,
  Button,
} from './StyledComponents';
import PropTypes from 'prop-types';

export default function ContactList({ items, onDeleteContact }) {
  return (
    <TaskList>
      {items.map(i => (
        <TaskItem key={i.id}>
          <TaskItemElements>{i.name} :</TaskItemElements>
          <TaskItemElements>{i.number}</TaskItemElements>
          <Button type="button" onClick={() => onDeleteContact(i.id)}>
            Delete
          </Button>
        </TaskItem>
      ))}
    </TaskList>
  );
}

ContactList.propTypes = {
  items: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func,
};
