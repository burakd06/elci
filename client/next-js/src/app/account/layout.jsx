import { MainLayout } from 'src/layouts/main';
import { AccountTemplate } from 'src/layouts/template/account';
import { EcommerceTemplate } from 'src/layouts/template/ecommerce';

// ----------------------------------------------------------------------

export default function Layout({ children }) {
  return (
    <MainLayout>
      <EcommerceTemplate>
        <AccountTemplate>{children}</AccountTemplate>
      </EcommerceTemplate>
    </MainLayout>
  );
}
