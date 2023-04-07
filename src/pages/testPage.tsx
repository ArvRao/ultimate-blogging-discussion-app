import { Box } from '@mui/material';
import React from 'react';

// Box component with centering the content responsive layout

const testPage = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
        p:3
      }}
      height={{ xs: '100%', md: '50vh' }}
      bgcolor={{ xs: '#fff', md: '#f2f2f2' }}
    >
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. A ut earum sapiente ex quae! Eligendi tenetur qui omnis, eaque repudiandae accusantium quod! Voluptas hic possimus at, sit excepturi veritatis accusamus?</div>
    </Box>
  );
};

export default testPage;
