import Image from 'next/image';

import { AppBar, Box, Toolbar } from '@mui/material';

import Logo from "/public/LOGOBLANCO.png";


export const Navbar = () => {
  return (
    <AppBar position='static' color='primary'>
        <Toolbar>
            <Box flex={1} />

            <Box padding={1}>
                <Image src={Logo} width={300} height={56} alt='DevTalles Logo' style={{ marginBottom: 20}}/>
      
            </Box>

            <Box flex={1} />

        </Toolbar>
    </AppBar>
  )
}
