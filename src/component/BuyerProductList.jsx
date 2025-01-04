import SearchIcon from '@mui/icons-material/Search';
import {
  Box,
  Button,
  FormControl,
  InputAdornment,
  OutlinedInput,
  Pagination,
  Stack,
} from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import React, { useCallback, useState } from 'react';
import $axios from '../lib/axios/axios.instance';
import Loader from './Loader';
import ProductCard from './ProductCard';
import ProductFilterDialog from './ProductFilterDialog';
import { useDispatch, useSelector } from 'react-redux';
import { clearFilter } from '../store/slices/productSlice';
import { debounce } from 'lodash';

const BuyerProductList = () => {
  const [searchText, setSearchText] = useState('');

  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();

  const { category, minPrice, maxPrice, isFilterApplied } = useSelector(
    (state) => state.product
  );

  const { isPending, data } = useQuery({
    queryKey: [
      'get-buyer-products',
      currentPage,
      searchText,
      category,
      minPrice,
      maxPrice,
    ],
    queryFn: async () => {
      return await $axios.post('/product/list/buyer', {
        page: currentPage,
        limit: 6,
        searchText: searchText || null,
        category: category || null,
        minPrice: minPrice || 0,
        maxPrice: maxPrice || 0,
      });
    },
  });

  const productList = data?.data?.productList;
  const totalPage = data?.data?.totalPage;

  const updateSearchText = (text) => {
    setSearchText(text);
    setCurrentPage(1);
  };

  // we have delayed this function to wait for user to write down complete search text
  const delayedUpdateSearchText = useCallback(debounce(updateSearchText, 500), [
    searchText,
  ]);

  if (isPending) {
    return <Loader />;
  }
  return (
    <>
      <Stack direction="row" spacing={4}>
        {isFilterApplied && (
          <Button
            variant="contained"
            color="error"
            onClick={() => {
              dispatch(clearFilter());
            }}
          >
            Clear Filter
          </Button>
        )}
        <ProductFilterDialog />
        <FormControl variant="standard">
          <OutlinedInput
            defaultValue={searchText || ''}
            onChange={(event) => {
              delayedUpdateSearchText(event.target.value);
            }}
            placeholder="Search products here..."
            startAdornment={
              <InputAdornment position="start" sx={{ color: 'purple' }}>
                <SearchIcon sx={{ fontSize: '2rem' }} />
              </InputAdornment>
            }
          />
        </FormControl>
      </Stack>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '3rem',
          margin: '2rem 0',
        }}
      >
        {productList.map((item) => {
          return <ProductCard key={item._id} {...item} />;
        })}
      </Box>
      <Pagination
        page={currentPage}
        count={totalPage}
        color="secondary"
        onChange={(_, value) => {
          setCurrentPage(value);
        }}
      />
    </>
  );
};

export default BuyerProductList;
