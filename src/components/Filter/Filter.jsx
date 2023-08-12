import React from "react";
import PropTypes from 'prop-types';

import { Input } from 'components/ContactForm/ContactForm.styled';
import { Label,FilterContainer } from './Filter.styled';

export const Filter = ({ filter, handleFilter }) => (
<FilterContainer>
  <Label htmlFor="filter">Search contacts by name:</Label>
  <Input
    type="text"
    value={filter}
    name="input"
    id="filter"
    onChange={handleFilter}
  />
</FilterContainer>
);

Filter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

