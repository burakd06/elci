import { lazy } from 'react';
import { Outlet } from 'react-router-dom';
import { MainLayout } from 'src/layouts/main';

// Dinamik olarak yüklenecek Login bileşeni
const Login = lazy(() => import('src/pages/adminlogin/login'));



export const loginRoutes = [
  {
    path: 'admin',
    element: (
      <MainLayout>
        <Outlet />
      </MainLayout>
    ),
    children: [
      { path: '', element: <Login /> }, // Giriş sayfası
      
    ],
  },
];
