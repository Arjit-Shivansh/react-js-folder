import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

function RoutesManager() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/public" element={<PublicRoute />} />
        <Route path="/private" element={<PrivateRoute />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesManager;
