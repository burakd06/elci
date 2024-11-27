import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import { useTheme } from '@mui/material/styles';
import { usePathname } from 'src/routes/hooks';
import { useBoolean } from 'src/hooks/use-boolean';
import { Logo } from 'src/components/logo';
import { Main } from './main';
import { Footer } from './footer';
import { NavMobile } from './nav/mobile';
import { HomeFooter } from './home-footer';
import { NavDesktop } from './nav/desktop';
import { navData } from '../config-nav-main';
import { MenuButton } from '../components/menu-button';
import { LayoutSection } from '../core/layout-section';
import { HeaderSection } from '../core/header-section';
import { SettingsButton } from '../components/settings-button';

// ----------------------------------------------------------------------

export function MainLayout({ sx, children, header }) {
  const theme = useTheme();

  const pathname = usePathname();

  const openMobileNav = useBoolean();

  const homePage = pathname === '/';

  const layoutQuery = 'md';

  return (
    <LayoutSection
      /** **************************************
       * Header
       *************************************** */
      headerSection={
        <HeaderSection
          layoutQuery={layoutQuery}
          sx={header?.sx}
          slots={{
            topArea: (
              <Alert severity="info" sx={{ display: 'none', borderRadius: 0 }}>
                This is an info Alert.
              </Alert>
            ),
            leftArea: (
              <>
                {/* -- Menu button -- */}
                <MenuButton
                  onClick={openMobileNav.onTrue}
                  sx={{
                    mr: 1,
                    ml: -1,
                    [theme.breakpoints.up(layoutQuery)]: { display: 'none' },
                  }}
                />
                <NavMobile
                  data={navData}
                  open={openMobileNav.value}
                  onClose={openMobileNav.onFalse}
                />
                {/* -- Logo -- */}
                <Logo />
              </>
            ),
            centerArea: (
              <NavDesktop
                data={navData}
                sx={{
                  display: 'none',
                  [theme.breakpoints.up(layoutQuery)]: { display: 'flex' },
                }}
              />
            ),
            rightArea: (
              <Box gap={{ [layoutQuery]: 1 }} display="flex" alignItems="center">
                
                <SettingsButton />
              </Box>
            ),
          }}
        />
      }
      /** **************************************
       * Footer
       *************************************** */
      footerSection={homePage ? <HomeFooter /> : <Footer layoutQuery={layoutQuery} />}
      /** **************************************
       * Style
       *************************************** */
      sx={sx}
    >
      <Main>{children}</Main>
    </LayoutSection>
  );
}
