import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Layout from './Pages/Layout/Layout';
import { Logout } from '@mui/icons-material';
import Marksheet from './Pages/Marksheet/Marksheet';
import CreatePage from './Pages/CreatePage/CreatePage';
import Setting from './Pages/Setting/Setting';
import Dashboard from './Pages/Dashboard/Dashboard';


function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        <Route>
          <Route path='/' element={<Layout />}>
           
            <Route path='dash' element={<Dashboard/>} />
            <Route path='mark' element={<Marksheet />} />
            <Route path='create' element={< CreatePage />} />
            <Route path='setting' element={< Setting />} />
            <Route path='logout' element={< Logout />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
