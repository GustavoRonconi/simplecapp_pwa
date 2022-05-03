// import React from 'react';
// import { Route, Redirect } from 'react-router-dom'
import { isLogged, login } from '../auth/auth'
import { LOGIN, HOME } from './routes'
import React from 'react';
import { Navigate, Outlet, Route, useLocation } from 'react-router-dom';


// export default function PrivateRoute ({props}) {
//     const location = useLocation()
//     const auth = isLogged()
//     return auth ? <Outlet /> : <Navigate
//                   to={{
//                     pathname: "/login",
//                     state: { from: location }
//                   }} />;
// }





// export default function PrivateRoute({ Component }, ...rest) {
//     return (
//         <Route {...rest} render={props => (
//             isLogged() ?
//                 <Component {...props} />
//                 : <Redirect to={LOGIN} />
//         )} />
//     )
// }




// function PrivateRoute({ isLogged }) {
//     const auth = useAuth();
//     // const location = useLocation()

//     return isLogged() === true
//         ? <Navigate to={HOME} />
//         : <Navigate to={LOGIN} />;
// }

// //   replace state={{ path: location.pathname }}

// export default PrivateRoute

// function PrivateRoute({ children, ...rest }) {
//     let auth = useAuth();
//     return (
//       <Route
//         {...rest}
//         render={({ location }) =>
//           auth.user ? (
//             children
//           ) : (
//             <Navigate
//               to={{
//                 pathname: "/login",
//                 state: { from: location }
//               }}
//             />
//           )
//         }
//       />
//     );
//   }

// export default PrivateRoute

// const useAuth = () => {
//     const user = localStorage.getItem('user')
//     if (user) {
//         return true
//     } else {
//         return false
//     }
// }

// const PublicRoutes = (props: any) => {

//     const auth = useAuth()

//     return auth ? <Navigate to="/dashboard" /> : <Outlet />
// }

// export default PublicRoutes;