import { Box, Grid, Typography } from "@mui/material"
import { GeneralLayout } from "../../../../components/layout"
import { ContestCard } from "../../../../components/ui"
import { ContestantsList } from "../../../../components/contestans"
import { initialContestantsData } from "../../../../database"


const ConcursoActivo = () => {
    return (
        <GeneralLayout title="Concurso Activo - DevTalles">

            <Box display='flex' justifyContent='center' sx={{ height: 'calc(100vh-10px)', backgroundColor: '#1e133b' }}>
                <Grid container display='flex' justifyContent='center'>
                    
                    <Grid item xs={12} md={12}>
                        <Typography variant="body1" fontSize='34px' fontWeight={500} color='white' textAlign='left' paddingLeft={5}paddingBottom={2}> CodeQuest 2024 </Typography>
                    </Grid>

                    <Grid item xs={12} md={12}>
                        <ContestCard />

                    </Grid>

                    <Grid item xs={12} md={12}>
                        <Typography variant='body1' fontWeight={500} fontSize='26px' color='white' textAlign='left' paddingLeft={5}>Participantes:</Typography>
                    </Grid>

                    <ContestantsList
                    contestants={initialContestantsData.contestants} />

                </Grid>
            </Box>

        </GeneralLayout>
    )
}

export default ConcursoActivo