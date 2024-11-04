import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { fDate } from 'src/utils/format-time';

import { maxLine, varAlpha } from 'src/theme/styles';

import { Image } from 'src/components/image';
import { Iconify } from 'src/components/iconify';

import { PostTime } from '../../blog/post-time';
import { PostItemMobile } from '../../blog/post-item-mobile';

// ----------------------------------------------------------------------

export function CareerLatestPosts({ largePost, smallPosts, sx, ...other }) {
  return (
    <Box
      component="section"
      sx={{
        pt: { xs: 5, md: 10 },
        pb: { xs: 10, md: 15 },
        ...sx,
      }}
      {...other}
    >
      <Container>
        <Box
          display="flex"
          alignItems="center"
          justifyContent={{ xs: 'center', md: 'space-between' }}
          sx={{
            mb: { xs: 5, md: 10 },
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Stack sx={{ maxWidth: { md: 460 } }}>
            <Typography variant="overline" sx={{ color: 'text.disabled' }}>
              Blog
            </Typography>

            <Typography variant="h2" sx={{ my: 3 }}>
              Read our latest news
            </Typography>

            <Typography sx={{ color: 'text.secondary' }}>
              Aenean vulputate eleifend tellus. Mauris turpis nunc, blandit et, volutpat molestie,
              porta ut, ligula.
            </Typography>
          </Stack>

          <Button
            component={RouterLink}
            href={paths.career.posts}
            color="inherit"
            endIcon={<Iconify icon="solar:alt-arrow-right-outline" />}
            sx={{ display: { xs: 'none', md: 'inline-flex' } }}
          >
            View all
          </Button>
        </Box>

        <Box
          sx={{
            gap: 4,
            display: { xs: 'none', md: 'grid' },
            gridTemplateColumns: 'repeat(2, 1fr)',
          }}
        >
          <PostItem post={largePost} largePost />

          <Box sx={{ columnGap: 4, columnCount: 2 }}>
            {smallPosts.map((post, index) => (
              <PostItem
                key={post.id}
                post={post}
                order={index % 3}
                sx={{ breakInside: 'avoid', mb: 4 }}
              />
            ))}
          </Box>
        </Box>

        <Box sx={{ gap: 3, flexDirection: 'column', display: { xs: 'flex', md: 'none' } }}>
          {[largePost, ...smallPosts].map((post) => (
            <PostItemMobile key={post.id} post={post} />
          ))}
        </Box>

        <Box
          display="grid"
          gap={{ xs: 3, md: 4 }}
          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
          }}
        />

        <Stack alignItems="center" sx={{ mt: 5, display: { md: 'none' } }}>
          <Button
            component={RouterLink}
            href={paths.career.posts}
            color="inherit"
            endIcon={<Iconify icon="solar:alt-arrow-right-outline" />}
          >
            View all
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

export function PostItem({ post, order, largePost, sx, ...other }) {
  return (
    <Box
      gap={2}
      display="flex"
      flexDirection="column"
      sx={{
        ...(largePost && {
          borderRadius: 2,
          overflow: 'hidden',
          position: 'relative',
        }),
        ...sx,
      }}
      {...other}
    >
      <Image
        alt={post.title}
        src={post.coverUrl}
        ratio={(largePost && '3/4') || (order && '4/3') || '1/1'}
        slotProps={{
          overlay: {
            ...(largePost && {
              backgroundImage: (theme) =>
                `linear-gradient(to bottom, ${varAlpha(theme.vars.palette.common.blackChannel, 0)}, ${
                  theme.vars.palette.common.black
                })`,
            }),
          },
        }}
        sx={{ borderRadius: 2 }}
      />

      <Box
        display="flex"
        flexDirection="column"
        gap={largePost ? 2 : 1}
        sx={{
          ...(largePost && {
            p: 5,
            bottom: 0,
            zIndex: 9,
            position: 'absolute',
            color: 'common.white',
          }),
        }}
      >
        <PostTime
          createdAt={fDate(post.createdAt)}
          duration={post.duration}
          sx={{
            ...(largePost && { opacity: 0.72, color: 'inherit' }),
          }}
        />

        <Link
          component={RouterLink}
          href={paths.career.post}
          color="inherit"
          variant={largePost ? 'h4' : 'h6'}
          sx={{ ...maxLine({ line: 2 }) }}
        >
          {post.title}
        </Link>

        {largePost && (
          <Typography sx={{ ...maxLine({ line: 2 }), opacity: 0.48 }}>
            {post.description}
          </Typography>
        )}
      </Box>
    </Box>
  );
}
