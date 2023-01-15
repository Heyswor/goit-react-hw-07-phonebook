import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectStatusFilter,
  selectFiltredContacts,
  selectIsLoading,
  selectError,
} from 'redux/selectors';
import { updateFilter } from 'redux/filterSlice';

import { fetchContacts, deleteContacts } from 'redux/operations';

export function App() {
  const dispatch = useDispatch();
  const filter = useSelector(selectStatusFilter);
  const filtredContacts = useSelector(selectFiltredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const changeFilter = e => {
    dispatch(updateFilter(e.target.value));
  };

  const delContact = contactId => {
    dispatch(deleteContacts(contactId));
  };

  return (
    <div>
      <h1>Phonebook</h1>

      <ContactForm />

      <h2>Contacts</h2>
      <Filter filter={filter} onChange={changeFilter} />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList contacts={filtredContacts} deleteContact={delContact} />
    </div>
  );
}
