import { useDispatch } from 'react-redux';
import { Loader } from 'components/Loader/loader';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppBar } from 'components/AppBar/appBar';
import { PrivateRoute } from 'redux/authorization/privateRoute';
import { RestrictedRoute } from 'redux/authorization/restrictedRoute';
import { refreshUser } from 'redux/authorization/operationsAuth';
import { useAuth } from 'redux/authorization/useAuth';
import ContactsPage from 'pages/contactsPage';
import Home from 'pages/homePage';
import RegisterPage from 'pages/registerPage';
import Login from 'pages/loginPage';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<AppBar />}>
        <Route index element={<Home />} />
        <Route
          path="/registerPage"
          element={
            <RestrictedRoute
              redirectTo="/contactsPage"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/loginPage"
          element={
            <RestrictedRoute redirectTo="/contactsPage" component={<Login />} />
          }
        />
        <Route
          path="/contactsPage"
          element={
            <PrivateRoute
              redirectTo="/loginPage"
              component={<ContactsPage />}
            />
          }
        />
      </Route>
    </Routes>
  );
};

// export const App = () => {
//   const contacts = useSelector(selectContacts);
//   const loading = useSelector(selectIsLoading);
//   const error = useSelector(selectError);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <Container>
//       {loading && !error && <Loader />}
//       <Title>Phonebook</Title>
//       <SectionTitle>Add contact</SectionTitle>
//       <ContactForm />
//       <SectionTitle>Contacts</SectionTitle>
//       {contacts.length > 0 ? (
//         <>
//           <Filter />
//           <ContactList />
//         </>
//       ) : (
//         <Message>
//           {' '}
//           "There are no contacts in your phonebook. Please add your first
//           contact!"
//         </Message>
//       )}
//     </Container>
//   );
// };
