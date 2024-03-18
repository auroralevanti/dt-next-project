import { GetServerSideProps } from 'next';
import { GeneralLayout } from '../../../../components/layout';
import { Box, Typography, Card } from '@mui/material';

const Ganador = ({ data }: any) => {

    return (
        <GeneralLayout title='Agregar admin - DevTalles'>
            <Box display='flex' justifyContent='center' sx={{ height: 'calc(100vh-10px)', backgroundColor: '#1e133b' }}>




                <Card sx={{ backgroundColor: '#e8d2ff', borderRadius: 2, borderColor: '#08440A', paddingRight: 2, paddingLeft: 2, paddingTop: 4, margin: 10 }}>

                    <Typography variant="body1" fontSize='34px' fontWeight={500} color='white' textAlign='left' paddingLeft={5} paddingBottom={2}>
                        Nombre usuario en Discord: {data.discordName}
                    </Typography>

                    <Typography variant="body1" fontSize='34px' fontWeight={500} color='white' textAlign='left' paddingLeft={5} paddingBottom={2}>
                        ID en Discord: {data.discordId}
                    </Typography>

                </Card>



            </Box>
        </GeneralLayout>

    )
}

export default Ganador

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time


export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const urlToBack = 'https://devquest.azurewebsites.net/api/User/pickWinner'

    const connectToBack = await fetch(urlToBack, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const data = await connectToBack.json();
    console.log(data)

    return {
        props: {
            data
        }
    }
}