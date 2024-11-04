import { lazy } from 'react';
import { Outlet } from 'react-router-dom';
import { MainLayout } from 'src/layouts/main';

// Dinamik olarak yüklenecek Login bileşeni
const Profile = lazy(() => import('src/pages/adminpanel/profile'));



export const profileRoutes = [
  {
    path: 'profile',
    element: (
      <MainLayout>
        <Outlet />
      </MainLayout>
    ),
    children: [
      { path: '', element: <Profile /> }, // Giriş sayfası
      
    ],
  },
];
