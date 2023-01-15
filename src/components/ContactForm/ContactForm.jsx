import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { getContact } from 'redux/selectors';
import { addContact } from 'redux/contactsSlice';

export function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContact);
  const { register, handleSubmit, resetField } = useForm({
    defaultValues: {
      name: '',
      number: '',
    },
  });

  const onHandleSubmit = values => {
    const { name, number } = values;
    const findedContact = contacts.find(contact =>
      contact.name.toLowerCase().includes(name.toLowerCase())
    );
    if (findedContact) {
      alert(`${findedContact.name} is already in contacts`);
      return;
    } else {
      dispatch(addContact(name, number));
    }
    resetField('name');
    resetField('number');
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onHandleSubmit)} className={css.contactForm}>
        <label htmlFor="">
          Name
          <input
            id={nanoid(4)}
            type="text"
            name="name"
            {...register('name', { required: 'This is required' })}
          />
        </label>

        <label htmlFor="">
          Number
          <input
            id={nanoid(4)}
            type="tel"
            name="number"
            {...register('number', {
              required: 'This is required',
              minLength: 6,
            })}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    </div>
  );
}
