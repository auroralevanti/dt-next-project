import { GetServerSideProps } from 'next';
import { Box, Grid, Typography } from "@mui/material";
import { GeneralLayout } from "../../../../components/layout";
import { ContestCard } from "../../../../components/ui";
import { ContestantsList } from "../../../../components/contestans";
import { initialContestData, initialContestantsData } from "../../../../database";

const nombreConcursoActivo = initialContestData.contest;

const ConcursoActivo = ({ getContestantsList, getContest }: any) => {
    return (
        <GeneralLayout title="Concurso Activo - DevTalles">

            <Box display='flex' justifyContent='center' sx={{ height: 'calc(100vh-10px)', backgroundColor: '#1e133b' }}>
                <Grid container display='flex' justifyContent='center'>
                    
                    <Grid item xs={12} md={12}>
                        <Typography variant="body1" fontSize='34px' fontWeight={500} color='white' textAlign='left' paddingLeft={5}paddingBottom={2}>
                             {nombreConcursoActivo.contestName} 

{/*                              {
                                getContest.Objeto.map(({ contestName }: any) =>

                                {contestName}
                                
                                )
                             } */}
                        </Typography>
                    </Grid>

                    <Grid item xs={12} md={12}>
                        <ContestCard />

                    </Grid>

                    <Grid item xs={12} md={12}>
                        <Typography variant='body1' fontWeight={500} fontSize='26px' color='white' textAlign='left' paddingLeft={5}>Participantes:</Typography>
                    </Grid>

                    <ContestantsList
                    contestants={
                        initialContestantsData.contestants
                        } 
                        /* {
                            getContestantsList.Objeto.map(({ discordName }: any) =>

                            {discordName}
                            
                            )
                         } */
                        />

                </Grid>
            </Box>

        </GeneralLayout>
    )
}

export default ConcursoActivo

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time


export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const url = 'https://devquest.azurewebsites.net/api/Contest/getContestUsers' 
    const url2 = 'https://devquest.azurewebsites.net/api/Contest/getActiveContest';

    const connectToGetContestants = await fetch(url, {
        method: 'GET',
        headers:{
            'Content-Type': 'application/json'
        }
    })

    const getContestantsList = await connectToGetContestants.json();
    const list = await getContestantsList.Objeto
    /* console.log(list); */

    const connectToGetContestInfo = await fetch(url2, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const getContest = await connectToGetContestInfo.json();
    const list2 = await getContest.Objeto;
    //console.log(list2)

    return {
        props: {
            getContestantsList,
            getContest
        }
    }
}