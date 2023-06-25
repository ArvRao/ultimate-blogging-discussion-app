/* eslint-disable @typescript-eslint/no-misused-promises */
import React from 'react'
import AppBar from "@mui/material/AppBar";
import Link from "next/link";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import { Box, Drawer, ListItemText } from '@mui/material';
import { signIn, useSession, signOut } from 'next-auth/react';
import LogoutIcon from '@mui/icons-material/Logout';

const menuItems = [
  // { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/Contact" },
  { label: "Profile", path: "/profile" },
  { label: "Write", path: "/write" },
  // { label: "Logout", path: "/Logout" }
];

// const menuItemsAuth = [
//   // { label: "Home", path: "/" },
//   { label: "About", path: "/about" },
//   { label: "Contact", path: "/Contact" },
//   { label: "Diary", path: "/" },
//   { label: "Login/Sign up", path: "/auth" }
// ];



const MainLayout = ({children}: React.PropsWithChildren) => {

  const {data:sessionData, status} = useSession()
  console.log("session data", sessionData)

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <div>
    <AppBar component="nav" className="bg-gradient-to-r from-cyan-600 to-blue-500">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h3"
            component="div"
            sx={{
              pl: 20,
              flexGrow: 1,
              display: { sm: "none", xs: "none", md: "block" },
            }}
            align="center"
          >
            <Link href="/">InsiderStack</Link>
          </Typography>
          <List sx={{ display: "flex", justifyContent: "center" }}>
            {/* check if user is authenticated */}
            {status === 'authenticated' ? 
            // menuItems.map((menuItem) => (
            //   <Link href={menuItem.path} key={menuItem.label} target="_blank">
            //     <ListItem button>
            //       <ListItemText primary={menuItem.label} sx={{ px: 1 }} />
            //     </ListItem>
            //   </Link>
            // )) 
            <div>
            <button onClick={()=> signOut()} className='flex items-center space-x-3 border border-gray-200 px-4 py-2 transition hover:border-gray-900 hover:text-gray-900'>Logout</button>
            <div className='px-10'>
              <LogoutIcon />
            </div>
            </div>
            : 
            // menuItemsAuth.map((menuItem) => (
            //   <Link href={menuItem.path} key={menuItem.label} target="_blank">
            //     <ListItem button>
            //       <ListItemText primary={menuItem.label} sx={{ px: 1 }} />
            //     </ListItem>
            //   </Link>
            // ))
            <button onClick={() => signIn("google")}>Sign in</button>
            }
          </List>
        </Toolbar>
      </AppBar>
        
        {children}
       
        </div>
  )
}

export default MainLayout