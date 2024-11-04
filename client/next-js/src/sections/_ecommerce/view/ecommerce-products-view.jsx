'use client';

import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Pagination, { paginationClasses } from '@mui/material/Pagination';

import { useBoolean } from 'src/hooks/use-boolean';
import { useSetState } from 'src/hooks/use-set-state';

import { Iconify } from 'src/components/iconify';

import { EcommerceFilters } from '../ecommerce-filters';
import { EcommerceProductViewListItem } from '../product/item/ecommerce-product-view-list-item';
import { EcommerceProductViewGridItem } from '../product/item/ecommerce-product-view-grid-item';
import { EcommerceProductItemBestSellers } from '../product/item/ecommerce-product-item-best-sellers';

// ----------------------------------------------------------------------

const VIEW_OPTIONS = [
  { value: 'list', icon: <Iconify icon="carbon:list-boxes" /> },
  { value: 'grid', icon: <Iconify icon="carbon:grid" /> },
];

const SORT_OPTIONS = [
  { value: 'latest', label: 'Latest' },
  { value: 'oldest', label: 'Oldest' },
  { value: 'popular', label: 'Popular' },
];

// ----------------------------------------------------------------------

export function EcommerceProductsView({ products, bestSellers }) {
  const openMobile = useBoolean();

  const [sort, setSort] = useState('latest');

  const [viewMode, setViewMode] = useState('grid');

  const filters = useSetState({
    brands: ['Apple'],
    category: '',
    rating: null,
    inStock: false,
    shipping: [],
    tags: [],
    price: [0, 0],
  });

  const handleChangeViewMode = useCallback((event, newAlignment) => {
    if (newAlignment !== null) {
      setViewMode(newAlignment);
    }
  }, []);

  const handleChangeSort = useCallback((event) => {
    setSort(event.target.value);
  }, []);

  const renderList = (
    <>
      {viewMode === 'grid' ? (
        <Box
          rowGap={4}
          columnGap={3}
          display="grid"
          gridTemplateColumns={{
            xs: 'repeat(2, 1fr)',
            sm: 'repeat(3, 1fr)',
            md: 'repeat(4, 1fr)',
          }}
        >
          {products?.map((product) => (
            <EcommerceProductViewGridItem key={product.id} product={product} />
          ))}
        </Box>
      ) : (
        <Stack spacing={4}>
          {products?.map((product) => (
            <EcommerceProductViewListItem key={product.id} product={product} />
          ))}
        </Stack>
      )}

      <Pagination
        count={10}
        sx={{
          mt: 10,
          mb: 5,
          [`& .${paginationClasses.ul}`]: {
            justifyContent: 'center',
          },
        }}
      />
    </>
  );

  const renderListBestSellers = (
    <Stack spacing={3}>
      <Typography variant="h6">Best sellers</Typography>
      {bestSellers?.map((product) => (
        <EcommerceProductItemBestSellers key={product.id} product={product} />
      ))}
    </Stack>
  );

  return (
    <Container>
      <Box display="flex" alignItems="center" sx={{ py: 5 }}>
        <Typography variant="h3" sx={{ flexGrow: 1 }}>
          Catalog
        </Typography>
        <Button
          color="inherit"
          variant="contained"
          startIcon={<Iconify width={18} icon="solar:filter-outline" />}
          onClick={openMobile.onTrue}
          sx={{ display: { md: 'none' } }}
        >
          Filters
        </Button>
      </Box>

      <Stack direction={{ xs: 'column-reverse', md: 'row' }} sx={{ mb: 10 }}>
        <Stack
          spacing={5}
          divider={<Divider sx={{ borderStyle: 'dashed' }} />}
          sx={{
            flexShrink: 0,
            width: { md: 280 },
          }}
        >
          <EcommerceFilters
            filters={filters}
            open={openMobile.value}
            onClose={openMobile.onFalse}
            options={{
              shippings: ['Fast', 'Saving', 'Free'],
              brands: ['Apple', 'Samsung', 'Xiaomi', 'Honor'],
              tags: ['Books and media', 'Pet', 'Electronics', 'Food', 'Automotive and industrial'],
              categories: [
                'Apple iPhone',
                'Samsung Galaxy',
                'Nike Air Max',
                'Adidas Ultraboost',
                'Sony PlayStation',
              ],
              ratings: ['Up 4 stars', 'Up 3 stars', 'Up 2 stars'],
            }}
          />

          {renderListBestSellers}
        </Stack>

        <Box
          flex="1 1 auto"
          sx={{
            minWidth: 0,
            pl: { md: 8 },
          }}
        >
          <Box display="flex" alignItems="center" justifyContent="space-between" sx={{ mb: 5 }}>
            <ToggleButtonGroup
              exclusive
              size="small"
              value={viewMode}
              onChange={handleChangeViewMode}
              sx={{ borderColor: 'transparent' }}
            >
              {VIEW_OPTIONS.map((option) => (
                <ToggleButton key={option.value} value={option.value}>
                  {option.icon}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>

            <FormControl size="small" hiddenLabel sx={{ width: 120 }}>
              <Select value={sort} onChange={handleChangeSort} inputProps={{ id: `sort-select` }}>
                {SORT_OPTIONS.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          {renderList}
        </Box>
      </Stack>
    </Container>
  );
}
