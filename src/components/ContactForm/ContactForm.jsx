import React, { Component } from "react";
import PropTypes from 'prop-types';

import { Button, Form, Input, Label } from './ContactForm.styled'; 
import Notiflix from 'notiflix';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  }

  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.name.trim() && !this.state.number.trim()) {
      Notiflix.Notify.failure('Input is Empty !');
      return;
    }

    this.props.onSubmit(this.state);
    this.setState({ name: '', number: '' }); 
  }

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <div>
          <Label htmlFor="name">Name</Label>
<Input
  id="name"
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я' ]+$"
  title="Name may contain only letters, apostrophe, and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
  onChange={this.handleChange}
  value={this.state.name}
/>
          <Label htmlFor="tel">Number</Label>
 <Input
            id="tel"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleChange}
            value={this.state.number}
          />
          <Button type="submit">Add contact</Button>
        </div>
      </Form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;