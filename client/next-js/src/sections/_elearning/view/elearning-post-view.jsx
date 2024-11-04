'use client';

import { useState, useCallback } from 'react';

import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Popover from '@mui/material/Popover';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import { paths } from 'src/routes/paths';

import { usePopover } from 'src/hooks/use-popover';

import { fDate } from 'src/utils/format-time';

import { CONFIG } from 'src/config-global';
import { varAlpha } from 'src/theme/styles';
import { _socials, _coursePosts } from 'src/_mock';

import { Iconify } from 'src/components/iconify';
import { Markdown } from 'src/components/markdown';
import { SvgColor } from 'src/components/svg-color';
import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { PostTags } from '../../blog/post-tags';
import { PostAuthor } from '../../blog/post-author';
import { ElearningNewsletter } from '../elearning-newsletter';
import { PrevNextButton } from '../../blog/post-prev-and-next';
import { ElearningLatestPosts } from '../posts/elearning-latest-posts';

// ----------------------------------------------------------------------

const post = _coursePosts[0];
const prevPost = _coursePosts[1];
const nextPost = _coursePosts[2];
const latestPosts = _coursePosts.slice(3, 6);

// ----------------------------------------------------------------------

export function ElearningPostView() {
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

  const renderToolbar = (
    <Box
      gap={1.5}
      display="flex"
      sx={(theme) => ({
        py: 3,
        my: 5,
        borderTop: `solid 1px ${theme.vars.palette.divider}`,
        borderBottom: `solid 1px ${theme.vars.palette.divider}`,
      })}
    >
      <Avatar src={post.author.avatarUrl} sx={{ width: 48, height: 48 }} />

      <Stack spacing={0.5} flexGrow={1}>
        <Typography variant="subtitle2">{post.author.name}</Typography>
        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
          {fDate(post.createdAt)}
        </Typography>
      </Stack>

      <Box display="flex" alignItems="center">
        <IconButton onClick={openSocial.onOpen} color={openSocial.open ? 'primary' : 'default'}>
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
  );

  return (
    <>
      <Divider />

      <Container>
        <CustomBreadcrumbs
          links={[
            { name: 'Home', href: '/' },
            { name: 'Blog', href: paths.eLearning.posts },
            { name: post.title },
          ]}
          sx={{ my: { xs: 3, md: 5 } }}
        />

        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={(theme) => ({
            borderRadius: 2,
            overflow: 'hidden',
            position: 'relative',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            aspectRatio: { xs: '16/9', md: '21/9' },
            backgroundImage: `linear-gradient(to bottom, ${varAlpha(theme.vars.palette.common.blackChannel, 0)} 0%, ${theme.vars.palette.common.black} 75%), url(${post.heroUrl})`,
          })}
        >
          <Fab color="primary" sx={{ zIndex: 9, position: 'absolute' }}>
            <Iconify width={22} icon="solar:play-outline" />
          </Fab>
        </Box>

        <Grid container disableEqualOverflow spacing={3} justifyContent={{ md: 'center' }}>
          <Grid xs={12} md={8}>
            <Stack
              spacing={3}
              sx={{
                textAlign: 'center',
                mt: { xs: 5, md: 10 },
              }}
            >
              <Typography variant="body2" sx={{ color: 'text.disabled' }}>
                {post.duration}
              </Typography>

              <Typography variant="h2" component="h1">
                {post.title}
              </Typography>

              <Typography variant="h5">{post.description}</Typography>
            </Stack>

            {renderToolbar}

            <Markdown content={post.content} firstLetter />

            {!!post.tags.length && <PostTags tags={post.tags} />}

            {renderSocials}

            <Divider sx={{ mt: 10 }} />

            <PostAuthor author={post.author} />

            <Divider />

            <Box
              gap={5}
              display="grid"
              gridTemplateColumns={{ xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
              sx={{ py: 10 }}
            >
              <PrevNextButton title={prevPost?.title} coverUrl={prevPost?.coverUrl} href="#" />
              <PrevNextButton
                isNext
                title={nextPost?.title}
                coverUrl={nextPost?.coverUrl}
                href="#"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Divider />

      <ElearningLatestPosts posts={latestPosts} />

      <ElearningNewsletter />

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
