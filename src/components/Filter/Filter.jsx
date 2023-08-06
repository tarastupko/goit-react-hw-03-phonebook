import { Input } from 'components/ContactForm/ContactForm.styled';
import React from "react";
import { Label } from './Filter.styled';
import PropTypes from 'prop-types';


export const Filter = ({ filter, handleFilter }) => {
    return (
      <div>
        <Label style={{ marginRight: '14px' }} htmlFor="filter">Find contacts by name</Label>
        <Input type="text" value={filter} name="input" id="filter" onChange={handleFilter} />
      </div>
    )
}

Filter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired
};