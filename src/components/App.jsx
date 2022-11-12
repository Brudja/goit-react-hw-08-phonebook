import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { lazy, Suspense } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { currentOperation } from 'redux/PhoneBookRedux/Registraishon/RegOperethion';
import { PrivateRouts } from './PrivatRouts/PrivatRoutes';
import { HomePage } from 'pages/HomePage';
import PublicRouts from './PublickRoutes.jsx/PublickRoutes';
import Layout from 'layout';


const RegistrationUser = lazy(() => import('../pages/RegistrationPage'));
const Login = lazy(() => import('../pages/LoginPage'));
const Phonebook = lazy(() => import('../pages/PhonebookPage'));


export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(currentOperation());
  }, [dispatch]);

  
  return (
    <>
      <Layout>
        <Suspense>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/" element={<PublicRouts />}>
              <Route path="/registration" element={<RegistrationUser />} />
              <Route path="/login" element={<Login />} />
            </Route>
            <Route path="/" element={<PrivateRouts />}>
              <Route path="/phonebook" element={<Phonebook />} />
            </Route>
          </Routes>
          <ToastContainer />
        </Suspense>
      </Layout>
    </>
  );
};
