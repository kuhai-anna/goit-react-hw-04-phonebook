import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { nanoid } from 'nanoid';
import * as yup from 'yup';
import {
  Field,
  Form,
  FormButton,
  FormField,
  FormLabel,
  ErrorMessage,
  LabelText,
} from './ContactForm.styled';

const schema = yup.object().shape({
  name: yup
    .string(
      'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer'
    )
    .min(2, 'Too short!')
    .max(20, 'Too long!')
    .required('Name is a required field'),
  number: yup
    .number(
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('Number is a required field'),
});

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = ({ onSubmit }) => {
  // додавання контакту
  const addContact = (values, { resetForm }) => {
    const nameId = nanoid();

    onSubmit({
      id: nameId,
      ...values,
    });

    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={addContact}
    >
      <Form>
        <FormField>
          <FormLabel>
            <LabelText>Name</LabelText>
            <Field
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <ErrorMessage name="name" component="div" />
          </FormLabel>
        </FormField>
        <FormField>
          <FormLabel>
            <LabelText>Number</LabelText>
            <Field
              type="tel"
              name="number"
              // placeholder="+380 XX XXX XX XX"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
            <ErrorMessage name="number" component="div" />
          </FormLabel>
        </FormField>
        <FormButton type="submit">Add contact</FormButton>
      </Form>
    </Formik>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
