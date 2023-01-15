export const selectItems = state => state.contact.items;

export const selectIsLoading = state => state.contact.isLoading;

export const selectError = state => state.contact.error;

export const selectStatusFilter = state => state.filter;

export const  selectFiltredContacts = state => {
  const contacts = selectItems(state);
  const lowercaseFilter = selectStatusFilter(state).toLocaleLowerCase();
  // const filtredContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(lowercaseFilter)
  // );
  // return filtredContacts;
    if (contacts.length < 1)  {
      return;
    } else {
      const filtredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(lowercaseFilter)
      );
      return filtredContacts;
    }
};
