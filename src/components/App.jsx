import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectStatusFilter, selectFiltredContacts } from 'redux/selectors';
import { updateFilter } from 'redux/filterSlice';
import { deleteContact } from 'redux/contactsSlice';

export function App() {
  const dispatch = useDispatch();
  const filter = useSelector(selectStatusFilter);
  const filtredContacts = useSelector(selectFiltredContacts);

  const changeFilter = e => {
    dispatch(updateFilter(e.target.value));
  };

  const delContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <div>
      <h1>Phonebook</h1>

      <ContactForm />

      <h2>Contacts</h2>
      <Filter filter={filter} onChange={changeFilter} />
      <ContactList contacts={filtredContacts} deleteContact={delContact} />
    </div>
  );
}
