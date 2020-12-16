import React from 'react';
import { FilterBlock, Label, Title, Input } from './StyledComponents';
import PropTypes from 'prop-types';

export default function FilterContacts({ value, OnInputFilter }) {
  return (
    <FilterBlock>
      <Label>
        <Title>Find Contacts by name</Title>
        <Input
          type="text"
          value={value}
          onChange={event => OnInputFilter(event.target.value)}
        />
      </Label>
    </FilterBlock>
  );
}

FilterContacts.propTypes = {
  OnInputFilter: PropTypes.func,
  value: PropTypes.string,
};
