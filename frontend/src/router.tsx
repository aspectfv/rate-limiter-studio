import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { Suspense } from "react";
import AuthPage from "@/features/auth/routes/AuthPage";
import LoginForm from "@/features/auth/components/LoginForm";
import RegisterForm from "@/features/auth/components/RegisterForm";
import { loginAction, registerAction } from "@/features/auth/actions";
import MenuPage from "@/features/menu/routes/MenuPage";

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        index: true,
        element: <Navigate to="auth/login" replace />,
      },
      {
        path: 'auth',
        element: <AuthPage />,
        children: [
          {
            path: 'login',
            element: <LoginForm />,
            action: loginAction,
          },
          {
            path: 'register',
            element: <RegisterForm />,
            action: registerAction,
          },
        ],
      },
      {
        path: 'menu',
        element: <MenuPage />,
      }
    ],
  }
])

export const AppRouter = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <RouterProvider router={router} />
  </Suspense>
);
