import { List } from './contactList.styled';
import { ContactItem } from '../ContactItem/contactItem';
import { useSelector } from 'react-redux';
import { selectContacts, selectFiletrs } from 'redux/selectors';
import { ContactForm } from 'components/ContactForm/contactForm';
import { Filter } from 'components/Filter/filter';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filters = useSelector(selectFiletrs);

  const filterContacts = () => {
    const normalizedFilter = filters.toLowerCase();
    return contacts.filter(contact => {
      const contactName = contact.name.toLowerCase();
      const contactNumber = contact.number;

      return (
        contactName.toLowerCase().includes(normalizedFilter) ||
        contactNumber.includes(normalizedFilter)
      );
    });
  };

  const filteredContacts = filterContacts();

  return (
    <div>
      <ContactForm />
      <List>
        {filteredContacts.map(({ id, name, number }) => {
          return <ContactItem key={id} id={id} name={name} number={number} />;
        })}
      </List>
      <Filter />
      {contacts.length > 0 ? (
        <ContactList />
      ) : (
        <p>There is no contacts in your phonebook!</p>
      )}
    </div>
  );
};
