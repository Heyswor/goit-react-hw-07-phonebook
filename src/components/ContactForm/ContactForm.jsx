import { useState } from 'react';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
import PropTypes from 'prop-types';

export function ContactForm({ onSumbit }) {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value, id } = event.currentTarget;
    const uppercaseName = name.replace(
      name.charAt(0),
      name.charAt(0).toUpperCase()
    );
    setId(id);
    const dataFooName = 'set' + uppercaseName;
    dataFoo[dataFooName](value);
  };

  const dataFoo = {
    setId,
    setName,
    setNumber,
  };

  const data = {
    id,
    name,
    number,
  };

  const handleSumbmit = e => {
    e.preventDefault();

    onSumbit(data);
    reset();
  };

  const reset = () => {
    setId('');
    setName('');
    setNumber('');
  };

  return (
    <div>
      <form onSubmit={handleSumbmit} className={css.contactForm}>
        <label htmlFor="">
          Name
          <input
            id={nanoid(4)}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChange}
          />
        </label>

        <label htmlFor="">
          Number
          <input
            id={nanoid(4)}
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    </div>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
