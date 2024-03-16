import Image from 'next/image';
import { Raleway } from 'next/font/google';

import { Box, Grid, Typography } from "@mui/material";


import death from '/public/devtalles/death.png';

export const Fail = () => {
  return (
    <Box sx={{ height:'100%', backgroundColor: '#1e133b' }}>

            <Grid container display='flex' justifyContent='center' paddingTop={10}>
                <Grid item xs={12} md={12} padding={1}>
                    <Typography variant="body1" textAlign='center' fontWeight={300} fontSize='24px' color='white' >oh oh ....</Typography>

                </Grid>
                <Grid item xs={12} md={12} padding={1}>
                    <Typography variant="body1" textAlign='center' fontWeight={600} fontSize='40px' color='white' >Algo salió mal</Typography>

                </Grid>
                <Grid item xs={12} md={12} padding={1}>
                    <Typography variant="body1" textAlign='center' fontWeight={300} fontSize='24px' color='white' >intenta nuevamente</Typography>

                </Grid>

                <Grid item xs={12} md={12} padding={10} textAlign='center'>
                    <Image src={death} width={300} height={300} alt='death DevTalles' />
                </Grid>
            </Grid>
        </Box>
  )
}
