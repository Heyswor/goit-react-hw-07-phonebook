import { Contact } from 'components/Contact/Contact';

import PropTypes from 'prop-types';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul>
      <Contact contact={contacts} deleteBtn={deleteContact} />
    </ul>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
