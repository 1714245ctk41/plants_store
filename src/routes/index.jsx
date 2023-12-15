import { Suspense, lazy } from "react";
import { createBrowserRouter, useRoutes } from "react-router-dom";
import LoadingScreen from "../components/common/LoadingScreen";
import GuestGuard from "../guards/GuestGuard";

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};

// Authentication
const Register = Loadable(lazy(() => import("../screens/Author/Register")));
const Author = Loadable(lazy(() => import("../screens/Author")));
const Login = Loadable(lazy(() => import("../screens/Author/Login")));
const Dashboard = Loadable(lazy(() => import("../screens/Dashboard")));
// Dashboard

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Author />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  }
]);

// export const Router = () => useRoutes([
//   {
//     path: "/",
//     element: <Dashboard />,
//   },
//   {
//     path: "auth",
//     element: <Dashboard />,
//     // children: [
//     //   {
//     //     path: "login",
//     //     element: (
//     //       // <GuestGuard>
//     //         <Login />
//     //       // </GuestGuard>
//     //     ),
//     //   },
//     //   {
//     //     path: "register",
//     //     element: (
//     //       <GuestGuard>
//     //         <Register />
//     //       </GuestGuard>
//     //     ),
//     //   },
//     // ],
//   },
// ]);
