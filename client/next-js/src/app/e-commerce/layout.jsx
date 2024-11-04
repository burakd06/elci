import { MainLayout } from 'src/layouts/main';
import { EcommerceTemplate } from 'src/layouts/template/ecommerce';

// ----------------------------------------------------------------------

export default function Layout({ children }) {
  return (
    <MainLayout>
      <EcommerceTemplate>{children}</EcommerceTemplate>
    </MainLayout>
  );
}
