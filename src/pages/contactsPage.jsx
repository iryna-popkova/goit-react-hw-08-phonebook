import { ContactList } from 'components/ContactList/contactList';
import { ContactForm } from 'components/ContactForm/contactForm';
import { Filter } from 'components/Filter/filter';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';

export default function ContactsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Your contacts</h1>
      <ContactForm />
      <Filter />
      <ContactList />
    </>
  );
}
