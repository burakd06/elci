import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';

import { useBoolean } from 'src/hooks/use-boolean';

import { fDate } from 'src/utils/format-time';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

const AVATAR_SIZE = 64;

const WIDTH = `calc(100% - ${AVATAR_SIZE + 20}px)`;

// ----------------------------------------------------------------------

export function ElearningReviewItem({
  sx,
  name,
  rating,
  message,
  tagUser,
  createdAt,
  hasReply,
  avatarUrl,
  helpful = 0,
}) {
  const openReply = useBoolean();

  const clickedHelpful = useBoolean();

  const renderActions = (
    <Box gap={2} display="flex" alignItems="center" sx={{ mt: 2 }}>
      <ButtonBase
        disableRipple
        onClick={clickedHelpful.onToggle}
        sx={{
          gap: 1,
          fontWeight: 'fontWeightSemiBold',
          ...(clickedHelpful.value && { color: 'primary.main' }),
        }}
      >
        <Iconify width={18} icon="solar:like-outline" /> Helpful ({helpful})
      </ButtonBase>

      <Box sx={{ width: 4, height: 4, borderRadius: '50%', bgcolor: 'text.disabled' }} />

      <ButtonBase
        disableRipple
        onClick={openReply.onToggle}
        sx={{ fontWeight: 'fontWeightSemiBold' }}
      >
        Reply
      </ButtonBase>
    </Box>
  );

  return (
    <>
      <Box
        display="flex"
        sx={{
          py: 3,
          alignItems: 'flex-start',
          ...(hasReply && { ml: 'auto', width: WIDTH }),
          ...sx,
        }}
      >
        <Avatar
          alt={name}
          src={avatarUrl}
          sx={{ width: AVATAR_SIZE, height: AVATAR_SIZE, mr: 2.5 }}
        />

        <Stack sx={{ width: 1 }}>
          <Stack
            spacing={1}
            alignItems={{ sm: 'center' }}
            direction={{ xs: 'column', sm: 'row' }}
            justifyContent={{ sm: 'space-between' }}
          >
            <Typography variant="subtitle2">{name}</Typography>
            {!hasReply && <Rating size="small" value={rating} precision={0.5} readOnly />}
          </Stack>

          {createdAt && (
            <Typography
              variant="body2"
              sx={{ mb: 1, mt: { xs: 1, sm: 0.5 }, color: 'text.disabled' }}
            >
              {fDate(createdAt)}
            </Typography>
          )}

          <Typography variant="body2">
            {tagUser && <strong>{`@${tagUser} `}</strong>}
            {message}
          </Typography>

          {!hasReply && renderActions}

          {!hasReply && openReply.value && (
            <TextField
              fullWidth
              hiddenLabel
              placeholder="Write comment..."
              InputProps={{ sx: { height: 48 } }}
              sx={{ mt: 3 }}
            />
          )}
        </Stack>
      </Box>

      <Divider sx={{ ml: 'auto', width: WIDTH }} />
    </>
  );
}
