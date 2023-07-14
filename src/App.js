import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import DashboardPage from './Pages/DashboardPage';
import Navbar from './Pages/Navbar';
import Footer from './Pages/Footer';

const App = () => {
  return (
    <Router>
       <Navbar/>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/dashboard' element={<DashboardPage />} />
        {/* <Route path='/skill' element={<AddSkills/>}/> */}
        {/* <Route path='/education' element={<AddEducation/>}/> */}
      </Routes>
     <Footer/>
    </Router>
  );
};

export default App;
