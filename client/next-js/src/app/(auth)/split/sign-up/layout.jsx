import { AuthSplitLayout } from 'src/layouts/auth/split';

// ----------------------------------------------------------------------

export default function Layout({ children }) {
  return (
    <AuthSplitLayout
      section={{
        title: `Manage The Job \n More Effectively`,
      }}
    >
      {children}
    </AuthSplitLayout>
  );
}
