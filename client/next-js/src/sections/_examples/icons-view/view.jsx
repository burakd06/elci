'use client';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Tooltip from '@mui/material/Tooltip';

import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/config-global';
import { countries } from 'src/assets/data';

import { SvgColor } from 'src/components/svg-color';
import { Iconify, FlagIcon } from 'src/components/iconify';
import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { ComponentHero } from '../component-hero';
import { ComponentBlock, ComponentContainer } from '../component-block';

// ----------------------------------------------------------------------

export function IconsView() {
  return (
    <>
      <ComponentHero>
        <CustomBreadcrumbs
          heading="Icons"
          links={[{ name: 'Components', href: paths.components }, { name: 'Icons' }]}
          moreLink={[
            'https://mui.com/components/material-icons',
            'https://iconify.design/icon-sets',
          ]}
        />
      </ComponentHero>

      <ComponentContainer>
        <ComponentBlock title="Material">
          <Link
            href="https://mui.com/components/icons/#main-content"
            target="_blank"
            rel="noopener"
          >
            https://mui.com/components/icons/#main-content
          </Link>
        </ComponentBlock>

        <ComponentBlock title="Iconify">
          <Tooltip title="Palette icon">
            <Iconify width={32} icon="eva:color-palette-fill" />
          </Tooltip>
          <Iconify width={32} icon="eva:color-palette-fill" sx={{ color: 'action.active' }} />
          <Iconify width={32} icon="eva:color-palette-fill" sx={{ color: 'action.disabled' }} />
          <Iconify width={32} icon="eva:color-palette-fill" sx={{ color: 'primary.main' }} />
          <Iconify width={32} icon="eva:color-palette-fill" sx={{ color: 'secondary.main' }} />
          <Iconify width={32} icon="eva:color-palette-fill" sx={{ color: 'info.main' }} />
          <Iconify width={32} icon="eva:color-palette-fill" sx={{ color: 'success.main' }} />
          <Iconify width={32} icon="eva:color-palette-fill" sx={{ color: 'warning.main' }} />
          <Iconify width={32} icon="eva:color-palette-fill" sx={{ color: 'error.main' }} />
        </ComponentBlock>

        <ComponentBlock title="Local icon">
          <Tooltip title="Moon icon">
            <SvgColor width={32} src={`${CONFIG.assetsDir}/assets/icons/settings/ic-moon.svg`} />
          </Tooltip>
          <SvgColor
            width={32}
            src={`${CONFIG.assetsDir}/assets/icons/settings/ic-moon.svg`}
            sx={{ color: 'action.active' }}
          />
          <SvgColor
            width={32}
            src={`${CONFIG.assetsDir}/assets/icons/settings/ic-moon.svg`}
            sx={{ color: 'action.disabled' }}
          />
          <SvgColor
            width={32}
            src={`${CONFIG.assetsDir}/assets/icons/settings/ic-moon.svg`}
            sx={{ color: 'primary.main' }}
          />
          <SvgColor
            width={32}
            src={`${CONFIG.assetsDir}/assets/icons/settings/ic-moon.svg`}
            sx={{ color: 'secondary.main' }}
          />
          <SvgColor
            width={32}
            src={`${CONFIG.assetsDir}/assets/icons/settings/ic-moon.svg`}
            sx={{ color: 'info.main' }}
          />
          <SvgColor
            width={32}
            src={`${CONFIG.assetsDir}/assets/icons/settings/ic-moon.svg`}
            sx={{ color: 'success.main' }}
          />
          <SvgColor
            width={32}
            src={`${CONFIG.assetsDir}/assets/icons/settings/ic-moon.svg`}
            sx={{ color: 'warning.main' }}
          />
          <SvgColor
            width={32}
            src={`${CONFIG.assetsDir}/assets/icons/settings/ic-moon.svg`}
            sx={{ color: 'error.main' }}
          />
        </ComponentBlock>

        <ComponentBlock title="Social icon">
          {['google', 'facebook', 'linkedin', 'twitter', 'instagram', 'github'].map((social) =>
            social === 'twitter' || social === 'github' ? (
              <SvgColor
                key={social}
                width={32}
                src={`${CONFIG.assetsDir}/assets/icons/socials/ic-${social}.svg`}
              />
            ) : (
              <Box
                key={social}
                component="img"
                alt={social}
                src={`${CONFIG.assetsDir}/assets/icons/socials/ic-${social}.svg`}
                sx={{ width: 32, height: 32 }}
              />
            )
          )}
        </ComponentBlock>

        <ComponentBlock title="Flag icon">
          {countries.map((country) =>
            country.label ? (
              <Tooltip key={country.code} title={`${country.label} - ${country.code}`}>
                <FlagIcon code={country.code} />
              </Tooltip>
            ) : null
          )}
        </ComponentBlock>
      </ComponentContainer>
    </>
  );
}
