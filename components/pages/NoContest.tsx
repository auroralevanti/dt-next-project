import Image from 'next/image';
import { Raleway } from 'next/font/google';

import { Box, Grid, Typography } from "@mui/material";


import guitar from '/public/devtalles/guitar.png';

/* const raleway = Raleway({
    weight: '300',
    subsets:"latin"
}) */

export const NoContest = () => {
    return (
        <Box sx={{ height:'100%', backgroundColor: '#1e133b' }}>

            <Grid container display='flex' justifyContent='center' paddingTop={10}>
                <Grid item xs={12} md={12} padding={1}>
                    <Typography variant="body1" textAlign='center' fontWeight={600} fontSize='40px' color='white' >Próximamente</Typography>

                </Grid>
                <Grid item xs={12} md={12} padding={1}>
                    <Typography variant="body1" textAlign='center' fontWeight={300} fontSize='24px' color='white' >Nuevo Concurso</Typography>

                </Grid>

                <Grid item xs={12} md={12} padding={10} textAlign='center'>
                    <Image src={guitar} width={300} height={300} alt='guitar DevTalles' />
                </Grid>
            </Grid>
        </Box>
    )
}
