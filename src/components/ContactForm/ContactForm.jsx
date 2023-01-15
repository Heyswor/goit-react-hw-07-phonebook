import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { selectItems } from 'redux/selectors';

import { addContacts } from 'redux/operations';

export function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectItems);
  const { register, handleSubmit, resetField } = useForm({
    defaultValues: {
      name: '',
      phone: '',
    },
  });

  const onHandleSubmit = values => {
    const { name } = values;
    console.log();
    const findedContact = contacts.find(contact =>
      contact.name.toLowerCase().includes(name.toLowerCase())
    );
    if (findedContact) {
      alert(`${findedContact.name} is already in contacts`);
      return;
    } else {
      dispatch(addContacts(values));
    }
    resetField('name');
    resetField('phone');
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
            {...register('phone', {
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
