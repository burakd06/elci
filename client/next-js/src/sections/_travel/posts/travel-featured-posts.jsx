import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { fDate } from 'src/utils/format-time';

import { maxLine, varAlpha } from 'src/theme/styles';

import { Image } from 'src/components/image';

import { PostTime } from '../../blog/post-time';

// ----------------------------------------------------------------------

export function TravelFeaturedPosts({ largePost, smallPosts, sx, ...other }) {
  return (
    <Box
      component="section"
      sx={{
        pb: 10,
        pt: { xs: 0, md: 5 },
        ...sx,
      }}
      {...other}
    >
      <Container>
        <Box
          gap={3}
          display="grid"
          gridTemplateColumns={{ xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
        >
          <PostItem post={largePost} isLargePost />

          <Box
            gap={3}
            display="grid"
            gridTemplateColumns={{ xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)' }}
          >
            {smallPosts.map((post) => (
              <PostItem key={post.id} post={post} />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

export function PostItem({ post, isLargePost, sx, ...other }) {
  return (
    <Box sx={{ borderRadius: 2, overflow: 'hidden', position: 'relative', ...sx }} {...other}>
      <Image
        alt={post.title}
        src={post.coverUrl}
        ratio="1/1"
        slotProps={{
          overlay: {
            backgroundImage: (theme) =>
              `linear-gradient(to bottom, ${varAlpha(theme.vars.palette.common.blackChannel, 0)} 0%, ${
                theme.vars.palette.common.black
              } 75%)`,
          },
        }}
      />

      <Stack
        spacing={1}
        sx={{
          p: 3,
          bottom: 0,
          zIndex: 9,
          position: 'absolute',
          color: 'common.white',
          ...(isLargePost && {
            p: { xs: 3, md: 5 },
          }),
        }}
      >
        <PostTime
          createdAt={fDate(post.createdAt)}
          duration={post.duration}
          sx={{ color: 'inherit', opacity: 0.72 }}
        />

        <Link
          component={RouterLink}
          href={paths.travel.post}
          color="inherit"
          sx={{
            ...maxLine({ line: 2 }),
            typography: 'h6',
            ...(isLargePost && {
              typography: { xs: 'h6', md: 'h4' },
            }),
          }}
        >
          {post.title}
        </Link>

        {isLargePost && (
          <Typography sx={{ ...maxLine({ line: 2 }), opacity: 0.48 }}>
            {post.description}
          </Typography>
        )}

        <Box gap={1.5} display="flex" alignItems="center" sx={{ typography: 'body2', pt: 1.5 }}>
          <Avatar
            src={post.author.avatarUrl}
            sx={(theme) => ({
              width: 32,
              height: 32,
              ...(isLargePost && {
                [theme.breakpoints.up('md')]: {
                  width: 40,
                  height: 40,
                },
              }),
            })}
          />
          {post.author.name}
        </Box>
      </Stack>
    </Box>
  );
}
