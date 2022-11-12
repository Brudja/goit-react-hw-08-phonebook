import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

export function PrivateRouts() {
  const token = useSelector(state => state.registr.token);

  return token ? <Outlet /> : <Navigate to="/login" />;
}