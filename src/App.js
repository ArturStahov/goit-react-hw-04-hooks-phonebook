import { useState, useEffect } from 'react';
import uniqid from 'uniqid';
import SectionBlock from './components/Section/Section';
import PhoneForm from './components/PhoneForm/PhoneForm';
import ContactsList from './components/ContactList/ContactList';
import FilterContacts from './components/FilterContacts/FilterContacts';
import { error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/confirm/dist/PNotifyConfirm.css';
import isMobilePhone from 'validator/es/lib/isMobilePhone';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [nameFilter, setNameFilter] = useState('');

  useEffect(() => {
    if (localStorage.getItem('saveContacts')) {
      const arrLoadContacts = JSON.parse(localStorage.getItem('saveContacts'));
      setContacts(arrLoadContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('saveContacts', JSON.stringify(contacts));
  }, [contacts]);

  const filterContactList = () => {
    return contacts.filter(item =>
      item.name.toLowerCase().includes(nameFilter.toLowerCase()),
    );
  };

  const addContact = (name, number) => {
    let isContactPresent = contacts.some(item =>
      item.name.toLowerCase().includes(name.toLowerCase()),
    );
    const createContact = () => {
      const contact = {
        name,
        number,
        id: uniqid(),
      };
      setContacts(prevState => [...prevState, contact]);
    };
    const errorBadValueNumber = () => {
      return error({
        title: 'Hi!',
        text:
          'BAD value phone-number!!! You must enter phone-number correct format',
        delay: 3000,
      });
    };

    const errorContactPresent = () => {
      return error({
        title: 'Hi!',
        text: 'This contact is present in phone-book!',
        delay: 3000,
      });
    };

    if (!isContactPresent) {
      isMobilePhone(number) ? createContact() : errorBadValueNumber();
    } else {
      errorContactPresent();
    }
  };

  const deleteContact = id => {
    setContacts(prevState => prevState.filter(e => e.id !== id));
  };

  const contactsFilterInput = inputValue => {
    setNameFilter(inputValue);
  };
  const visibleContacts = filterContactList();

  return (
    <>
      <SectionBlock title="Phone-book">
        <PhoneForm onAddContact={addContact} />
      </SectionBlock>
      <SectionBlock title="Contacts">
        <FilterContacts
          value={nameFilter}
          OnInputFilter={contactsFilterInput}
        />
        <ContactsList items={visibleContacts} onDeleteContact={deleteContact} />
      </SectionBlock>
    </>
  );
}
