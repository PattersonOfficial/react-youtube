import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';

const SearchBar = () => (
  <Paper
    component='form'
    onSubmit={() => {}}
    sx={{
      border: '1px solid #e3e3e3',
      borderRadius: 20,
      pl: 2,
      boxShadow: 'none',
      mr: { sm: 5 },
    }}>
    <input
      className='search-bar'
      placeholder='Search...'
      value=''
      onChange={() => {}}
    />

    <IconButton type='submit' sx={{ p: '10', color: 'red' }}>
      <Search />
    </IconButton>
  </Paper>
);

export default SearchBar;