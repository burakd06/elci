'use client';

import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';

import { paths } from 'src/routes/paths';

import { useBoolean } from 'src/hooks/use-boolean';

import { _mock } from 'src/_mock';

import { Iconify } from 'src/components/iconify';
import { Player, PlayerDialog } from 'src/components/player';
import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { ComponentHero } from '../component-hero';
import { ComponentBlock, ComponentContainer } from '../component-block';

// ----------------------------------------------------------------------

export function PlayerView() {
  const openVideo = useBoolean();

  return (
    <>
      <ComponentHero>
        <CustomBreadcrumbs
          heading="Player"
          links={[{ name: 'Components', href: paths.components }, { name: 'Player' }]}
          moreLink={['https://www.npmjs.com/package/react-player']}
        />
      </ComponentHero>

      <ComponentContainer>
        <Box
          gap={3}
          display="grid"
          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
          }}
        >
          <ComponentBlock title="Player">
            <Player controls url={_mock.video(0)} />
          </ComponentBlock>

          <ComponentBlock title="With dialog">
            <Fab color="primary" variant="extended" onClick={openVideo.onTrue}>
              <Iconify width={22} icon="solar:play-outline" />
              Open with Dialog
            </Fab>

            <PlayerDialog
              open={openVideo.value}
              onClose={openVideo.onFalse}
              videoPath={_mock.video(0)}
            />
          </ComponentBlock>
        </Box>
      </ComponentContainer>
    </>
  );
}
