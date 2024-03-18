import Image from 'next/image';
import { Box, Button, Grid, Typography } from "@mui/material"
import { GeneralLayout } from "../../../../components/layout"
import { ContestantWinnerCard } from "../../../../components/ui";

import gift from '/public/devtalles/giftdevi.png';
import love from '/public/devtalles/love.png';


const ElegirGanador = () => {
    return (
        <GeneralLayout title='Elegir Ganador - DevTalles'>
            <Box display='flex' justifyContent='center' flexDirection='column' sx={{ height: 'calc(100vh-10px)', backgroundColor: '#1e133b' }}>
                <Box display='flex' justifyContent='left' paddingLeft={5}>
                    <Typography variant="body1" fontSize='40px' fontWeight={500} color='white' textAlign='left' paddingLeft={5} paddingBottom={2}> El ganador es: </Typography>

                </Box>



                <Box display='flex' justifyContent='center' paddingLeft={20}>
                    <Image src={love} width={100} height={100} alt='regalo DevTalles' />
                </Box>

                {/* <ContestantWinnerCard /> */}
                <Box display='flex' justifyContent='center'>
                    <Image src={gift} width={510} height={504} alt='regalo DevTalles' />

                </Box>


                <Box display='flex' justifyContent='center' margin={2}>
                    <Button
                        variant='contained'
                        size='large'
                        color='secondary'
                        sx={{ margin: 2}}
                        href='/usuario/admin/ganador-random'>
                        elegir ganador
                    </Button>



                    <Button
                        variant='contained'
                        size='large'
                        color='secondary'
                        sx={{ margin: 2}}>
                        finalizar
                    </Button>

                </Box>

            </Box>
        </GeneralLayout>
    )
}

export default ElegirGanador