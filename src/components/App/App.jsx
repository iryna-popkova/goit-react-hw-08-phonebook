import { useDispatch } from 'react-redux';
import { Loader } from 'components/Loader/loader';
import { useEffect, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from 'components/privateRoute';
import { RestrictedRoute } from 'components/restrictedRoute';
import { refreshUser } from 'redux/authorization/operationsAuth';
import { useAuth } from 'redux/authorization/useAuth';
import { Layout } from 'components/AppLayout/layout';

const Home = lazy(() => import('pages/homePage'));
const RegisterPage = lazy(() => import('pages/registerPage'));
const Login = lazy(() => import('pages/loginPage'));
const ContactsPage = lazy(() => import('pages/contactsPage'));

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
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
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
