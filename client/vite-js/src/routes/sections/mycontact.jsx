import { lazy } from 'react';
import { Outlet } from 'react-router-dom';

import { MainLayout } from 'src/layouts/main';


// ----------------------------------------------------------------------

const Mycontact = lazy(() => import('src/pages/mycontact/mycontact'));
const About = lazy (() => import('src/pages/about/about'));
const Mustahsil = lazy (() => import('src/pages/e-mustahsil/mustahsil'));
const Efatura = lazy (() => import('src/pages/e-fatura/efatura'));
const EArsivfatura = lazy (() => import('src/pages/e-arsivfatura/earsivfatura'));
const Eirsaliye = lazy (() => import('src/pages/e-irsaliye/eirsaliye'));
const Eserbestmeslekmakbuzu = lazy (() => import('src/pages/eserbestmeslekmakbuzu/eserbestmeslekmakbuzu'));
const Edefter = lazy (() => import('src/pages/edefter/edefter'));
const Esaklama = lazy (() => import('src/pages/esaklama/esaklama'));
const Eimza = lazy (() => import('src/pages/eimza/eimza'));
const Kep = lazy (() => import('src/pages/kep/kep'));
const Basvuruform = lazy (() => import('src/pages/insankaynakları/insankaynakları'));
const Blog = lazy (() => import('src/pages/blog/blog'));
const Beyan = lazy (() => import('src/pages/beyan/beyan'));
const Aktarım = lazy (() => import('src/pages/aktarım/aktarım'));
const Pusula = lazy(() => import('src/pages/egiderpusulası/egiderpusulası'))








// ----------------------------------------------------------------------

export const companyRoutes = [
  {
    path: 'company',
    element: (
      <MainLayout>
        <Outlet />
      </MainLayout>
    ),
    children: [
      {path: 'contact', element: <Mycontact /> },
      {path: 'about', element: <About /> }, 
      {path: 'e-mustahsil', element: <Mustahsil/>},
      {path: 'e-fatura', element: <Efatura/>},
      {path: 'e-arsivfatura', element: <EArsivfatura/>},
      {path: 'e-irsaliye', element: <Eirsaliye/>},
      {path: 'e-serbestmeslekmakbuzu', element: <Eserbestmeslekmakbuzu/>},
      {path: 'e-defter', element: <Edefter/>},
      {path: 'e-saklama', element: <Esaklama/>},
      {path: 'e-imza', element: <Eimza/>},
      {path: 'kep', element: <Kep/>},
      {path: 'İnsanKaynaklari', element: <Basvuruform/>},
      {path: 'blog', element: <Blog/>},
      {path: 'beyan', element: <Beyan/>},
      {path: 'aktarım', element: <Aktarım/>},
      {path: 'pusula', element: <Pusula/>},
      
      
    ],
  },
];
