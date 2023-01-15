export const selectContact = state => state.contact;

export const selectStatusFilter = state => state.filter;

export const selectFiltredContacts = state => {
  const contacts = selectContact(state);
  const lowercaseFilter = selectStatusFilter(state).toLocaleLowerCase();
  const filtredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(lowercaseFilter)
  );
  return filtredContacts;
};
