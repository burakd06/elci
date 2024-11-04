import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Pagination, { paginationClasses } from '@mui/material/Pagination';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { fDate } from 'src/utils/format-time';

import { maxLine } from 'src/theme/styles';

import { Image } from 'src/components/image';

// ----------------------------------------------------------------------

export function ElearningPosts({ posts, sx, ...other }) {
  return (
    <>
      <Box
        display="grid"
        columnGap={4}
        rowGap={{ xs: 4, md: 5 }}
        gridTemplateColumns={{
          xs: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
        }}
        sx={sx}
        {...other}
      >
        {posts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </Box>

      <Pagination
        count={10}
        sx={{
          py: 10,
          [`& .${paginationClasses.ul}`]: {
            justifyContent: 'center',
          },
        }}
      />
    </>
  );
}

// ----------------------------------------------------------------------

export function PostItem({ post, sx, ...other }) {
  return (
    <Paper
      variant="outlined"
      sx={{
        borderRadius: 2,
        overflow: 'hidden',
        bgcolor: 'transparent',
        ...sx,
      }}
      {...other}
    >
      <Image src={post.coverUrl} alt={post.title} ratio="1/1" />

      <Box display="flex" gap={3} sx={{ p: 3 }}>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="subtitle2" component="span">
            {fDate(post.createdAt, 'MMM')}
          </Typography>
          <Divider sx={{ mt: 1, mb: 0.5 }} />
          <Typography variant="h3" component="span">
            {fDate(post.createdAt, 'DD')}
          </Typography>
        </Box>

        <Box gap={1} display="flex" flexDirection="column" flex="1 1 auto">
          <Link
            component={RouterLink}
            href={paths.eLearning.post}
            color="inherit"
            variant="h6"
            sx={(theme) => ({
              ...maxLine({ line: 2, persistent: theme.typography.h6 }),
            })}
          >
            {post.title}
          </Link>

          <Typography
            variant="body2"
            sx={(theme) => ({
              ...maxLine({ line: 2, persistent: theme.typography.body2 }),
              color: 'text.secondary',
            })}
          >
            {post.description}
          </Typography>

          <Box gap={1.5} display="flex" alignItems="center" sx={{ pt: 1.5 }}>
            <Avatar src={post.author.avatarUrl} />
            <Box gap={0.5} display="flex" flexDirection="column">
              <Box component="span" sx={{ typography: 'body2' }}>
                {post.author.name}
              </Box>
              <Typography variant="caption" sx={{ color: 'text.disabled' }}>
                {post.duration}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
}
