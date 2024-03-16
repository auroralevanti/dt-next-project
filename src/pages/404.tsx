import Image from 'next/image';
import { Raleway, Raleway_Dots } from 'next/font/google';

import { Box, Grid, Typography } from "@mui/material";


import error from '/public/devtalles/404.png';
import { GeneralLayout } from '../../components/layout';


const NotFoundPage = () => {
    return (
        <GeneralLayout title='Page not Found - DevTalles'>
            <>
                <Box sx={{ height: '100%', backgroundColor: '#1e133b' }}>

                    <Grid container display='flex' justifyContent='center' paddingTop={10}>

                        <Grid item xs={12} md={12} paddingTop={1}>
                            <Typography variant="body1" textAlign='center' fontWeight={300} fontSize='24px' color='white' >Página no encontrada</Typography>

                        </Grid>
                        <Grid item xs={12} md={12} padding={1} paddingLeft={10}>
                            <Typography variant="body1" textAlign='center' fontWeight={600} fontSize='40px' color='white' >Algo salió mal</Typography>
                        </Grid>

                        <Grid item xs={12} md={12} padding={10} textAlign='center'>
                            <Image src={error} width={300} height={300} alt='guitar DevTalles' />
                        </Grid>
                    </Grid>
                </Box>
            </>
        </GeneralLayout>
    )

}

export default NotFoundPage