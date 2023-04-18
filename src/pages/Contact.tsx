import { Typography, Card, CardContent, CardMedia, Button, Container, Box } from '@mui/material';
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { styled } from '@mui/material/styles';


// Define the style for the card
const MyCard = styled(Card)({
  maxWidth: 500,
  margin: 'auto',
});

// Define the style for the media (profile picture)
const MyMedia = styled(CardMedia)({
  height: 300,
});


const Contact = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h4" align="center" gutterBottom>
          Hey, Nice to meet you
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et mauris sit amet mauris mollis laoreet eu eget nulla. Vivamus dapibus ultricies ligula quis tincidunt. In interdum libero a libero tempus sodales.
        </Typography>
        <Typography variant="subtitle1" align="center">
        Ive always been passionate about building software thats helpful for the general public in some way
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam reiciendis possimus officia labore nesciunt suscipit animi, temporibus, at ratione sapiente dolorum placeat quaerat adipisci minima explicabo repudiandae, odit a ipsam!
        </Typography>
      </Box>
      <MyCard>
      <MyMedia
        // component="img"
        image="https://via.placeholder.com/200"
        // alt="My Profile Picture"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" align='center'>
          Arvind D Rao
        </Typography>
        <Typography variant="body2" color="text.secondary" align='center'>
          A software Engineer enthusiastic about building something useful to the general public. Passionate about problem solving, Cloud computing and Artificial Intelligence
        </Typography>
        <Typography variant="body2" color="text.secondary" align='center'>
          Email: arvindrao.759@gmail.com
        </Typography>
        {/* <Typography variant="body2" color="text.secondary" align='center'>
          Phone: +1 123 456 7890
        </Typography> */}
        <Typography variant="body2" color="text.secondary" align='center'>
          Website: www.yourwebsite.com
        </Typography>
      </CardContent>
    </MyCard>
      <h1>Follow me on LinkedIn, catch me Twitter</h1>
    </Container>
  );
};

export default Contact;
