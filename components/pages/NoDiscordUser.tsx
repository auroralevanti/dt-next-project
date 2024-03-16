import Image from 'next/image';
import NextLink from 'next/link';
import { Raleway } from 'next/font/google';

import { Box, Grid, Link, Typography } from "@mui/material";


import love from 'public/devtalles/love.png';


export const NoDiscordUser = () => {
  return (
    <Box sx={{ height:'100%', backgroundColor: '#1e133b' }}>

            <Grid container display='flex' justifyContent='center' paddingTop={10}>
                <Grid item xs={12} md={12} padding={1}>
                    <Typography variant="body1" textAlign='center' fontWeight={300} fontSize='24px' color='white' >oh oh ....</Typography>

                </Grid>
                <Grid item xs={12} md={12} padding={1}>
                    <Typography variant="body1" textAlign='center' fontWeight={600} fontSize='40px' color='white' >Ingresa a nuestro canal en Discord</Typography>

                </Grid>
                <Grid item xs={12} md={12} padding={1}>
                    <NextLink href='' passHref legacyBehavior>
                        <Link underline='none'>
                            <Typography variant="body1" textAlign='center' fontWeight={300} fontSize='24px' color='white' >DevTalles en Discord</Typography>
                        </Link>
                    </NextLink>

                </Grid>

                <Grid item xs={12} md={12} padding={10} textAlign='center'>
                    <Image src={love} width={300} height={300} alt='love DevTalles' />
                </Grid>
            </Grid>
        </Box>
  )
}
