import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "next/link";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import { AppBar, Toolbar, IconButton, List } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { ListItem, ListItemText, Divider } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: 310,
  lineHeight: "60px",
}));


const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 1),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '35ch',
      '&:focus': {
        width: '30ch',
      },
    },
  },
}));

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

      <Grid container>
        <Box
          sx={{
            paddingTop: 3,
            bgcolor: "#dadae0",
            display: "grid",
            // gap: 2,
          }}
        >
          <Toolbar>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search anything here"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          </Toolbar>
          <Typography variant="h6" component="div" style={{textAlign:'center'}}>
            All the main stuff like the blogs and discussions happen here
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={2}>
              <Box>
                <Item>Google ads(maybe)</Item>
              </Box>
            </Grid>
            <Grid item xs={8}>
              <Item>xs=10
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit vel eaque ab, ullam ex voluptatem, inventore veritatis enim beatae est temporibus, exercitationem recusandae sit fuga officiis pariatur repellat rem nostrum.
              </Item>
            </Grid>
          <Grid item xs={2}>
              <Box>
                <Item>Google ads(maybe)</Item>
              </Box>
            </Grid>
      </Grid>
        </Box>
          </Grid>
    </Box>
  );
}
