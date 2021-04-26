import React from 'react';
import { useSelector } from 'react-redux';
import Dashboard from '../dashboard/Dashboard';
import NotAdmin from '../NotAdmin/NotAdmin';
import './Admin.css';

const Admin = () => {
  const adminData = JSON.parse(sessionStorage.getItem('admin'));
  return <>{adminData?.email ? <Dashboard /> : <NotAdmin />}</>;
};

export default Admin;
