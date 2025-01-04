import MinimumLayout from "../layout/MinimumLayout";
import Register from "../pages/Register";
import Login from "../pages/Login.jsx";
import GuestGuard from "../guard/GuestGuard.jsx";

const guestRoutes = [
  {
    path: "/",
    element: (
      <GuestGuard>
        <MinimumLayout />
      </GuestGuard>
    ),
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
];

export default guestRoutes;
