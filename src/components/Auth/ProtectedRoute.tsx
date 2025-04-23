// import { Navigate, useLocation } from 'react-router-dom';
// import { useUser } from '../../context/UserContext';

// export const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const { user, loading } = useUser();
//   const location = useLocation();

//   if (loading) {
//     return <div>Loading...</div>; // Or your loading component
//   }

//   if (!user) {
//     return <Navigate to="/login" state={{ from: location }} replace />;
//   }

//   return <>{children}</>;
// };