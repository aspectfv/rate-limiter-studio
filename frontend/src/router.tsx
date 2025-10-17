import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { Suspense } from "react";
import AuthPage from "@features/auth/routes/AuthPage";

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        index: true,
        element: <Navigate to="auth" replace />,
      },
      {
        path: 'auth',
        element: <AuthPage />,
        // children: [
        //   {
        //     path: 'login',
        //     element: <LoginForm />,
        //     loader: loginLoader,
        //     action: loginAction,
        //   },
        //   {
        //     path: 'register',
        //     element: <RegisterForm />,
        //     action: registerAction,
        //   },
        // ],
      },
    ]
  }
])

export const AppRouter = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <RouterProvider router={router} />
  </Suspense>
);

