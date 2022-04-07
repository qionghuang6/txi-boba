import { useEffect, useState } from 'react';
import Copyright from '../src/Copyright'
import { Container, Box, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


const messages = [
  'Performing stoichiometric calculations ...',
  'Engineering boba straws ...',
  'Examining elasticity of boba pearls ...',
  'Conducting Fermi estimations ...',
  'Finding the shortest path into your stomach ...',
  'Determining straw flow rate ...',
]

const center = {
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  maxWidth: '100%',
}

export default function Index() {
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((messageIndex + 1) % messages.length)
    }, 2500);
    return () => clearInterval(interval);
  }, [messageIndex]);
  
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Container maxWidth="xl" bgcolor='#ffe5e3'>
      <Box m={1}>
        <Box bgcolor='lightblue' m={2} p={2} borderRadius={5}>
          <Typography align='center' variant={matches ? 'h3' : 'h4'} fontWeight={500}>
            <a href='http://txi.mit.edu/'>theta xi</a> boba distribution network
          </Typography>
        </Box>
        <Box justifyContent="center">
          <img style={center} id='van' src='txivan.png'></img>
          <Box mt={3}>
            <Typography align='center' variant={matches ? 'h3' : 'h4'}>{messages[messageIndex]}</Typography>
          </Box>
        </Box>
      </Box>
      <Box bgcolor='lightblue' p={2} m={2} borderRadius={5}>
          <Typography align='center' variant={matches ? 'h4' : 'h5'}>
          Theta Xi is handing out free boba at the New Vassar courtyard starting at 8PM on the first day of CPW! Come get your boba!
          </Typography>
        </Box>
      <Copyright />
    </Container>
  );
}
