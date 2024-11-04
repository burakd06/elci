'use client';

import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Popover from '@mui/material/Popover';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import { paths } from 'src/routes/paths';

import { usePopover } from 'src/hooks/use-popover';

import { fDate } from 'src/utils/format-time';

import { CONFIG } from 'src/config-global';
import { _socials, _careerPosts } from 'src/_mock';

import { Iconify } from 'src/components/iconify';
import { Markdown } from 'src/components/markdown';
import { SvgColor } from 'src/components/svg-color';
import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { PostTags } from '../../blog/post-tags';
import { PostTime } from '../../blog/post-time';
import { PostAuthor } from '../../blog/post-author';
import { CareerNewsletter } from '../career-newsletter';
import { CareerLatestPosts } from '../posts/career-latest-posts';

// ----------------------------------------------------------------------

const post = _careerPosts[0];
const latestPosts = _careerPosts.slice(0, 5);

// ----------------------------------------------------------------------

export function CareerPostView() {
  const openSocial = usePopover();

  const [favorite, setFavorite] = useState(post.favorited);

  const handleChangeFavorite = useCallback((event) => {
    setFavorite(event.target.checked);
  }, []);

  const renderSocials = (
    <Box gap={1.5} display="flex" sx={{ mt: 5 }}>
      <Box component="span" sx={{ lineHeight: '30px', typography: 'subtitle2' }}>
        Share:
      </Box>
      <Box gap={1} display="flex" alignItems="center" flexWrap="wrap">
        {_socials.map((social) => (
          <Button
            key={social.value}
            size="small"
            variant="outlined"
            startIcon={
              (social.value === 'twitter' && (
                <SvgColor
                  width={20}
                  src={`${CONFIG.assetsDir}/assets/icons/socials/ic-${social.value}.svg`}
                />
              )) || (
                <Box
                  component="img"
                  loading="lazy"
                  alt={social.label}
                  src={`${CONFIG.assetsDir}/assets/icons/socials/ic-${social.value}.svg`}
                  sx={{ width: 20, height: 20 }}
                />
              )
            }
          >
            {social.label}
          </Button>
        ))}
      </Box>
    </Box>
  );

  return (
    <>
      <Divider />

      <Container sx={{ overflow: 'hidden' }}>
        <Grid container spacing={3} justifyContent={{ md: 'center' }}>
          <Grid xs={12} md={8}>
            <CustomBreadcrumbs
              links={[
                { name: 'Home', href: '/' },
                { name: 'Blog', href: paths.career.posts },
                { name: post.title },
              ]}
              sx={{ my: { xs: 3, md: 5 } }}
            />

            <Typography variant="h2" component="h1">
              {post.title}
            </Typography>

            <Box gap={1.5} display="flex" sx={{ my: 5 }}>
              <Avatar src={post.author.avatarUrl} sx={{ width: 48, height: 48 }} />

              <Box flexGrow={1}>
                <Typography variant="subtitle2" sx={{ mb: 0.5 }}>
                  {post.author.name}
                </Typography>
                <PostTime createdAt={fDate(post.createdAt)} duration={post.duration} />
              </Box>

              <Box display="flex" alignItems="center">
                <IconButton
                  onClick={openSocial.onOpen}
                  color={openSocial.open ? 'primary' : 'default'}
                >
                  <Iconify icon="solar:share-outline" />
                </IconButton>

                <Checkbox
                  color="error"
                  checked={favorite}
                  onChange={handleChangeFavorite}
                  icon={<Iconify icon="solar:heart-outline" />}
                  checkedIcon={<Iconify icon="solar:heart-bold" />}
                  inputProps={{ id: 'favorite-checkbox', 'aria-label': 'Favorite checkbox' }}
                />
              </Box>
            </Box>

            <Typography variant="h5" sx={{ mb: 5 }}>
              {post.description}
            </Typography>

            <Markdown content={post.content} firstLetter />

            {!!post.tags.length && <PostTags tags={post.tags} />}

            {renderSocials}

            <Divider sx={{ mt: 10 }} />

            <PostAuthor author={post.author} />
          </Grid>
        </Grid>
      </Container>

      <Divider />

      <CareerLatestPosts largePost={latestPosts[0]} smallPosts={latestPosts.slice(1, 5)} />

      <CareerNewsletter />

      <Popover
        open={openSocial.open}
        anchorEl={openSocial.anchorEl}
        onClose={openSocial.onClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        slotProps={{
          paper: {
            sx: { width: 220 },
          },
        }}
      >
        {_socials.map((social) => (
          <MenuItem key={social.value} onClick={() => openSocial.onClose()} sx={{ gap: 1 }}>
            {(social.value === 'twitter' && (
              <SvgColor
                width={20}
                src={`${CONFIG.assetsDir}/assets/icons/socials/ic-${social.value}.svg`}
              />
            )) || (
              <Box
                component="img"
                loading="lazy"
                alt={social.label}
                src={`${CONFIG.assetsDir}/assets/icons/socials/ic-${social.value}.svg`}
                sx={{ width: 20, height: 20 }}
              />
            )}
            Share via {social.label}
          </MenuItem>
        ))}
      </Popover>
    </>
  );
}
