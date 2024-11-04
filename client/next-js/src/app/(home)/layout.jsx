import { MainLayout } from 'src/layouts/main';

// ----------------------------------------------------------------------

export default function Layout({ children }) {
  return (
    <MainLayout
      header={{
        sx: { position: { md: 'fixed' } },
      }}
    >
      {children}
    </MainLayout>
  );
}
