import React, { Component } from "react";
import ContactForm from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import Notiflix from 'notiflix';
import { nanoid } from 'nanoid'
import DataManager from "./storages/storage"
import * as storageKeys from "./storages/storageKeys";
import { H2Style } from './App.styled';
export class App extends Component {
  constructor(props) {
    super(props);
    this.dataManager = new DataManager();
    this.state = {
      contacts: [],
      filter: '',
    };
  }

  componentDidMount() {
    this.loadContactsFromStorage();
  }

  componentDidUpdate(_, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts !== contacts) {
      this.saveContactsToStorage();
    }

    if (prevState.contacts.length > contacts.length) {
      this.showDeleteNotification();
    }
  }

  loadContactsFromStorage() {
    const storedContacts = this.dataManager.load(storageKeys.CONTACTS);
    if (storedContacts) {
      this.setState({ contacts: storedContacts });
    }
  }

  saveContactsToStorage() {
    this.dataManager.save(storageKeys.CONTACTS, this.state.contacts);
  }

  showDeleteNotification() {
    Notiflix.Notify.failure('Contact deleted successfully');
  }

  handleFormSubmit = ({ name, number }) => {
    if (this.isContactAlreadyExists(name)) {
      this.showInfoNotification(`${name} is already in contacts`);
      return;
    }

    const newContact = {
      name,
      number,
      id: nanoid()
    };

    this.addContact(newContact);
    this.showSuccessNotification('Contact was added successfully');
  };

  isContactAlreadyExists(name) {
    return this.state.contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase());
  }

  showInfoNotification(message) {
    Notiflix.Notify.info(message);
  }

  addContact(newContact) {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  }

  showSuccessNotification(message) {
    Notiflix.Notify.success(message);
  }

  handleFilter = ({ target }) => {
    this.setState({ filter: target.value });
  }

  getFilteredContacts() {
    const { filter, contacts } = this.state;
    const normalizedFilterValue = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilterValue));
  }

  onDeleteBtn = (id) => {
    this.removeContact(id);
  }

  removeContact(id) {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  }

  render() {
    return (
      <>
        <div>
          <H2Style>Phonebook</H2Style>
          <ContactForm onSubmit={this.handleFormSubmit}/>
          <H2Style>Contacts</H2Style>
          <Filter filter={this.state.filter} handleFilter={this.handleFilter} />
          <ContactList contacts={this.getFilteredContacts()} onDeleteBtn={this.onDeleteBtn} />
        </div>
      </>
    );
  }
}