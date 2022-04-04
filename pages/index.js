import { useEffect, useState } from 'react';
import Copyright from '../src/Copyright'
import { Container, Box, Typography } from '@mui/material'

const messages = [
  'Performing stoichiometric calculations',
  'Engineering boba straws',
  'Examining elasticity of boba pearls',
  'Conducting Fermi estimations',
  'Finding the shortest path into your stomach',
  'Determining straw flow rate',
]

const center = {
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '50%',
}

export default function Index() {
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((messageIndex + 1) % messages.length)
    }, 2000);
    return () => clearInterval(interval);
  }, [messageIndex]);

  return (
    <Container maxWidth="xl" bgcolor='#ffe5e3'>
      <Box m={1} p={1}>
        <Box bgcolor='lightblue' p={1}>
          <Typography align='center' variant='h3'>
            theta xi boba distribution network
          </Typography>
        </Box>
        <Box justifyContent="center">
          <img style={center} id='van' src='txivan.png'></img>
          <Typography align='center' variant='h4'>{messages[messageIndex]}</Typography>
        </Box>
      </Box>
      <Copyright />
    </Container>
  );
}
