import { useState, useEffect } from 'react';
import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  // перевірка і додавання нових контактів
  const formSubmitHandler = contact => {
    const normalizeNewName = contact.name.toLowerCase();
    const nameList = contacts.map(contact => contact.name.toLowerCase());

    nameList.includes(normalizeNewName)
      ? alert(`${contact.name} is already in contacts.`)
      : setContacts(prevState => [...prevState, contact]);
  };

  // фільтрація контактів
  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizeFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizeFilter)
    );
  };

  // видалення контакта
  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  return (
    <>
      <Section mainTitle="Phonebook">
        <ContactForm onSubmit={formSubmitHandler} />
      </Section>
      <Section title="Contacts">
        <Filter value={filter} onChangeFilter={changeFilter} />
        <ContactList contacts={getVisibleContacts()} onDelete={deleteContact} />
      </Section>
    </>
  );
};
