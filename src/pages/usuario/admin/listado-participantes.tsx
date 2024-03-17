import { Box, Grid, Typography } from "@mui/material";
import { GeneralLayout } from "../../../../components/layout";
import { ContestantsList } from "../../../../components/contestans";
import { initialContestantsData } from "../../../../database";




const ListadoParticipantes = () => {
  return (
    <GeneralLayout title='Listado de participantes - DevTalles'>

        <Box display='flex' justifyContent='center' sx={{ height: 'calc(100vh-10px)', backgroundColor: '#1e133b' }}>

        <ContestantsList
        contestants={initialContestantsData.contestants} />

        </Box>

    </GeneralLayout>
  )
}

export default ListadoParticipantes