import Image from 'next/image';

import { AppBar, Box, Toolbar } from '@mui/material';

import Logo from "/public/LOGOBLANCO.png";


export const Navbar = () => {
  return (
    <AppBar position='static' color='primary'>
        <Toolbar>
            <Box flex={1} />

            <Box>
                <Image src={Logo} width={300} height={56} alt='DevTalles Logo' />
      
            </Box>

            <Box flex={1} />

        </Toolbar>
    </AppBar>
  )
}
