import PropTypes from 'prop-types';
import css from './Contact.module.css';

export const Contact = ({ contact, deleteBtn }) => {
  return (
    <>
      {contact.map(({ name, phone, id }) => {
        return (
          <li key={id} className={css.contactItem}>
            <p>
              {name}: {phone}
            </p>
            <button
              className={css.contactBtn}
              type="button"
              onClick={() => deleteBtn(id)}
            >
              delete
            </button>
          </li>
        );
      })}
    </>
  );
};

Contact.propTypes = {
  contact: PropTypes.array.isRequired,
  deleteBtn: PropTypes.func.isRequired,
};
