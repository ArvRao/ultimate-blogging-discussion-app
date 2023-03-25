import React from "react";
import Head from "next/head";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import LoginIcon from "@mui/icons-material/Login";
import Fingerprint from "@mui/icons-material/Fingerprint";
import IconButton from "@mui/material/IconButton";
import { Settings } from "@mui/icons-material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function index() {
  return (
    <div>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Blog + Diary</title>
      </Head>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h4"
              align="center"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              Ultimate Blog App
            </Typography>
            <Button variant="contained" color="success">
              Login
            </Button>
          </Toolbar>
        </AppBar>
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <Item>
              xs=12 Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Deleniti, dolore? Dolore pariatur, illum hic obcaecati
              necessitatibus, corrupti culpa temporibus ex dolorum molestiae
              voluptatum doloribus optio a maxime qui aliquid at!
            </Item>
            <Item>
              <Typography variant="h1">h1 tag</Typography>
            </Item>
            <Item>
            <Button variant="outlined" color="success">
              Success
            </Button>
            </Item>
          </Grid>
          <Grid item xs={8}>
            <Item>xs=8</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item xs={8}>
            <Item>
              xs=8
              <IconButton aria-label="fingerprint" color="secondary">
                <Fingerprint />
              </IconButton>
              <Button
                startIcon={<Settings />}
                variant="outlined"
                color="secondary"
                size="small"
              >
                Cotained
              </Button>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default index;
