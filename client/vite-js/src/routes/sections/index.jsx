import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';
import { MainLayout } from 'src/layouts/main';
import { SimpleLayout } from 'src/layouts/simple';
import { SplashScreen } from 'src/components/loading-screen';
import { companyRoutes} from  './mycontact' ;
import { loginRoutes } from './login' ;
import { profileRoutes } from './profile';

// ----------------------------------------------------------------------
const HomePage = lazy(() => import('src/sections/_home/home'));
const Page404 = lazy(() => import('src/pages/error/404'));
const Page500 = lazy(() => import('src/pages/error/500'));

// ----------------------------------------------------------------------

export function Router() {
  return useRoutes([
    {
      element: (
        <Suspense fallback={<SplashScreen />}>
          <Outlet />
        </Suspense>
      ),
      children: [
        {
          index: true,
          element: (
            <MainLayout header={{ sx: { position: { md: 'fixed' } } }}>
              <HomePage />
            </MainLayout>
          ),
        },

        ...companyRoutes,
        ...loginRoutes,
        ...profileRoutes,


        // Error (404, 500...)
        { path: 'error', element: <Page500 /> },
        { path: '404', element: <Page404 /> },

        {
          element: (
            <SimpleLayout>
              <Outlet />
            </SimpleLayout>
          ),
          children: [],
        },
        
        {
          element: (
            <SimpleLayout content={{ compact: true }}>
              <Outlet />
            </SimpleLayout>
          ),
          children: [],
        },
        { path: '*', element: <Navigate to="/404" replace /> },

       
      ],
    },
  ]);
}
