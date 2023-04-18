import * as React from "react";
import Head from "next/head";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { Card, CardActions, CardContent, Grid, Paper } from "@mui/material";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { styled } from '@mui/material/styles';
import CustomizedAccordions from "./Components/AccordianFaqs";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { style } from "@mui/system";
import { Image } from "@mui/icons-material";
import { blue } from "@mui/material/colors";
interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ["Home", "About", "Blog","Contact"];

const menuItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/Contact' },
  { label: 'Blog', path: '/' },
];

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);


const handleClick = (item: any) => {
  console.log("got clicked", item)
}

const responsivePaper = {
  border: "1px solid gray",
  margin: 1,
  flex: { xs: "100%", sm: "calc(50%-20px)", md: "calc(33%-20px)" }
}

export default function Index(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const container =
window !== undefined ? () => window().document.body : undefined;


  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
    </Box>
  );

    

  return (
    <Box>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>InsiderStack</title>
      </Head>
      <CssBaseline />
      <AppBar component="nav" className="bg-blue-500">
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
            sx={{ pl: 20, flexGrow: 1, display: { sm:"none", xs: "none", md: "block"} }}
            align="center"
          >
            InsiderStack
          </Typography>
      <List sx={{ display: 'flex', justifyContent: 'center' }}>
        {menuItems.map((menuItem) => (
          <Link href={menuItem.path} key={menuItem.label} target="_blank">
            <ListItem button>
              <ListItemText
                primary={menuItem.label}
                sx={{ px: 1 }}
              />
            </ListItem>
          </Link>
        ))}
      </List>
    
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 5, flexGrow: 1, pt: 5 }} className="bg-gray-100">
        <Toolbar />
        <Typography>
          Lorem1 ipsum dolor sit amet consectetur adipisicing elit. Similique
          unde fugit veniam eius, perspiciatis sunt? Corporis qui ducimus
          quibusdam, aliquam dolore excepturi quae. Distinctio enim at eligendi
          perferendis in cum quibusdam sed quae, accusantium et aperiam? Quod
          itaque exercitationem, at ab sequi qui modi delectus quia corrupti
          alias distinctio nostrum. Minima ex dolor modi inventore sapiente
          necessitatibus aliquam fuga et. Sed numquam quibusdam at officia
          sapiente porro maxime corrupti perspiciatis asperiores, exercitationem
          eius nostrum consequuntur iure aliquam itaque, assumenda et! Quibusdam
          temporibus beatae doloremque voluptatum doloribus soluta accusamus
          porro reprehenderit eos inventore facere, fugit, molestiae ab officiis
          illo voluptates recusandae. Vel dolor nobis eius, ratione atque
          soluta, aliquam fugit qui iste architecto perspiciatis. Nobis,
          voluptatem! Cumque, eligendi unde aliquid minus quis sit debitis
          obcaecati error, delectus quo eius exercitationem tempore. Delectus
          sapiente, provident corporis dolorum quibusdam aut beatae repellendus
          est labore quisquam praesentium repudiandae non vel laboriosam quo ab
          perferendis velit ipsa deleniti modi! Ipsam, illo quod. Nesciunt
          commodi nihil corrupti cum non fugiat praesentium doloremque
          architecto laborum aliquid. Quae, maxime recusandae? Eveniet dolore
          molestiae dicta blanditiis est expedita eius debitis cupiditate porro
          sed aspernatur quidem, repellat nihil quasi praesentium quia eos,
          quibusdam provident. Incidunt tempore vel placeat voluptate iure
          labore, repellendus beatae quia unde est aliquid dolor molestias
          libero. Reiciendis similique exercitationem consequatur, nobis placeat
          illo laudantium! Enim perferendis nulla soluta magni error, provident
          repellat similique cupiditate ipsam, et tempore cumque quod! Qui, iure
          suscipit tempora unde rerum autem saepe nisi vel cupiditate iusto.
          Illum, corrupti? Fugiat quidem accusantium nulla. Aliquid inventore
          commodi reprehenderit rerum reiciendis! Quidem alias repudiandae eaque
          eveniet cumque nihil aliquam in expedita, impedit quas ipsum nesciunt
          ipsa ullam consequuntur dignissimos numquam at nisi porro a, quaerat
          rem repellendus. Voluptates perspiciatis, in pariatur impedit, nam
          facilis libero dolorem dolores sunt inventore perferendis, aut
          sapiente modi nesciunt.
        </Typography>
        <br />
        <Divider />
        
        <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height={{ xs: '100%', md: '30vh' }}
      // bgcolor={{ xs: '#f2f', md: '#fa5' }}
      sx={{
        p:3
      }}
    >
      {/* <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, blanditiis commodi exercitationem explicabo reprehenderit sequi sint necessitatibus, quis vitae dolores dolore. Aliquid expedita ipsa architecto ab accusantium a voluptatum beatae.</div> */}
      <Card>
            <CardContent>
              <Typography
                variant="h5"
                color="text.secondary"
                gutterBottom
              >
                What is it about?
              </Typography>
              <Typography variant="h6" component="div">
                It is an online platform that help enables users to post blogs, videos, images. We help you get connected with various discussions you might be interested in.
              </Typography>
              {/* <Typography variant="body2">
                This is more than just an online blog posting platform.
                <br />
              </Typography> */}
              <Typography className="p-5">
            <Link href="/HomePage" target="_blank">
                  Get started here
                </Link>
              </Typography>
            </CardContent>
            </Card>
    </Box>
      
      {/* </Box> */}
      
        <Divider />
        <Typography className="p-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum consequuntur commodi nulla, unde accusantium. Aperiam eaque laboriosam cumque quae ducimus eum, tempora commodi eveniet. Animi perspiciatis est ex omnis.</Typography> <br /><br />
        <Divider />
        <Box >
          
      <Divider />
    </Box>
    <Box
  sx={{
    justifyContent: "center",
    alignItems: "center",
    height: "50vh",
    p:2,  
    backgroundColor: 'primary.dark',
    border: '1px dashed grey',
    // p: 3
    width: {
      xs: 400,
      sm: 600,
      md: 900,
      lg: 1300,
      xl: 1600,
      alignContent: "center"
    },
  }}
>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. A magni at vel laboriosam necessitatibus recusandae. Voluptatum aliquid aspernatur nemo iste facilis est assumenda tenetur eos officiis, ab sunt, iusto ipsa.
  1234
</Box>
<br />
<Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height={{ xs: '100%', md: '30vh' }}
      bgcolor={{ xs: '#f2f', md: '#fa5' }}
      sx={{
        p:3
      }}
    >
      <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, blanditiis commodi exercitationem explicabo reprehenderit sequi sint necessitatibus, quis vitae dolores dolore. Aliquid expedita ipsa architecto ab accusantium a voluptatum beatae.</div>
    </Box>
      
      </Box>
      
      <Divider />
      {/* <Footer /> */}
      <Divider />
      {/* accordian for faqs */}
      <Paper sx={{ flexWrap:"wrap", direction:"row" }}>
            <Grid item xs={12} sm={12} md={6} lg={1}>
            <Typography className="p-5" variant="h4" component="div">FAQs</Typography>
            </Grid>
            </Paper>
          <Paper sx={responsivePaper}><CustomizedAccordions /></Paper>
          <Divider />
        
    </Box>

  );
}
