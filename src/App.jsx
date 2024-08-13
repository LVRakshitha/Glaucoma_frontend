import React from 'react';
import Landing from './Landing';
import {Route , Routes} from 'react-router-dom'
import RegistrationForm from './RegistrationForm';
import DoctorPage from './DoctorPage';
import SignupForm from './SignupForm';
import ViewHistory from './History';
import AdminPage from './AdminPage';
import DoctorLogin from '../DoctorLogin';
import DoctorRegistration from '../DoctorRegistration';


const App = () => {
  return (
    <div>
      {/* <DoctorLogin/> */}
      {/* <DoctorRegistration/> */}
      <AdminPage />
   {/* <ViewHistory/> */}
      {/* <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/registration-form' element={<RegistrationForm />}/>
        <Route path='/doctor-page' element={<DoctorPage />}/>
        <Route path='/doctor-login' element={<DoctorLogin />}/>
        <Route path='/Doctor-Registration-form' element={<DoctorRegistration />}/>
        <Route path='/signup-form' element={<SignupForm/>}/>
      </Routes> */}
    </div>
  );
};

export default App;
