import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import App from './App';
import QrCode from './components/QrCode';

const Routing = () => {
  return (
    <Routes>
      <Route path={`/`} element={<App />} />
      <Route path={`/time-block`} element={<App />} />
      <Route path={`/qr-code`} element={<QrCode />} />
      <Route path={`/about`} element={<App />} />
      <Route path={`/near`} element={<App />} />
      <Route path="*" element={<Navigate replace to={`/`} />} />
    </Routes>
  );
};

export default Routing;
