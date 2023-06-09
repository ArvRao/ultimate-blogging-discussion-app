import { Paper, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'

const Footer = () => {
  return (
    <Paper sx={{marginTop: 'calc(10% + 60px)',
    width: '100%',
    position: 'fixed',
    bottom: 0,
    }} component="footer" square variant="outlined">
      <Container maxWidth="lg">
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            my:1
          }}
        >
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            mb: 2,
          }}
        >
          <Typography variant="caption" color="initial">
            Copyright ©2023. [] Limited
          </Typography>
        </Box>
      </Container>
    </Paper>
  )
}

export default Footer;