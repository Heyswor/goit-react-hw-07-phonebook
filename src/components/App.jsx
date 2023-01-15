import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import React, { useState, useEffect } from 'react';

const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    return JSON.parse(localStorage.getItem(key)) ?? defaultValue;
  });

  return [state, setState];
};

export function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleContactAdd = data => {
    const { name } = data;
    const findedContact = contacts.find(contact =>
      contact.name.toLowerCase().includes(name.toLowerCase())
    );
    if (findedContact) {
      alert(`${findedContact.name} is already in contacts`);
      return;
    } else {
      setContacts(prevState => [...prevState, data]);
    }
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };
  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  const lowercaseFilter = filter.toLocaleLowerCase();
  const filtredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(lowercaseFilter)
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSumbit={handleContactAdd} contacts={contacts} />

      <h2>Contacts</h2>
      <Filter filter={filter} onChange={changeFilter} />
      <ContactList contacts={filtredContacts} deleteContact={deleteContact} />
    </div>
  );
}
