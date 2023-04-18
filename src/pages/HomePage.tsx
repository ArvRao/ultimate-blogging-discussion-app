import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "next/link";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import { AppBar, Toolbar, IconButton, List } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { ListItem, ListItemText, Divider } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: 310,
  lineHeight: "60px",
}));

const darkTheme = createTheme({ palette: { mode: "dark" } });
// const lightTheme = createTheme({ palette: { mode: 'light' } });

export default function Elevation() {
  const menuItems = [
    { label: "Recent posts", path: "/" },
    { label: "My blogs", path: "/about" },
    { label: "My discussions", path: "/Contact" },
    { label: "Profile", path: "/" },
  ];

  return (
    <Box>
      <AppBar component="nav" className="bg-blue-500">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h3"
            component="div"
            sx={{
              pl: 30,
              flexGrow: 1,
              display: { sm: "none", xs: "none", md: "block" },
            }}
            align="center"
          >
            <Link href="/">InsiderStack</Link>
          </Typography>
          <List sx={{ display: "flex", justifyContent: "center" }}>
            {menuItems.map((menuItem) => (
              <Link href={menuItem.path} key={menuItem.label} target="_blank">
                <ListItem button>
                  <ListItemText primary={menuItem.label} sx={{ px: 1 }} />
                </ListItem>
              </Link>
            ))}
          </List>
        </Toolbar>
      </AppBar>

      <Divider />
      <br />
      <br />

      <Grid container spacing={1}>
        <Box
          sx={{
            p: 4,
            bgcolor: "#dadae0",
            display: "grid",
            gap: 2,
          }}
        >
          <Typography variant="h6" component="div">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat,
            soluta officia sunt iusto dolores unde provident assumenda
            voluptatem quas nobis accusamus veniam consectetur optio nisi
            voluptate, libero maiores cupiditate incidunt?
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={2}>
              <Box>
                <Item>xs=4</Item>
              </Box>
            </Grid>
            <Grid item xs={10}>
              <Item>xs=8</Item>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Box>
  );
}
