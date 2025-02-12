import { Navigate, Outlet } from 'react-router-dom';

function PrivateRoute({ isAuthenticated, children }) {
  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return children ? children : <Outlet />;
}

export default PrivateRoute;
