// routes/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';
import { getCurrentUserRole } from './auth';

function ProtectedRoute({ allowedRoles, children }) {
  const role = getCurrentUserRole();

  if (!allowedRoles.includes(role)) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;
