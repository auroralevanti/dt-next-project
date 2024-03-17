import { Box, Button, Card, CardContent, Grid, Typography } from "@mui/material"
import { initialContestData } from "../../database"


const contest = initialContestData.contest

export const ContestCard = () => {
    return (
        <Box m={2} display='flex' justifyContent='center'>
            <Card sx={{ maxWidth: '70%' }}>
                <CardContent>
                    <Grid container display='flex' justifyContent='space-between'>
                        <Grid item xs={6} md={6}>
                            <Typography variant='body1' fontWeight={300} fontSize='22px' color='primary' textAlign='center'>{contest.starsAt} - {contest.endsAt}</Typography>
                        </Grid>
                        <Grid item xs={6} md={6}>
                            <Typography variant='body1' fontWeight={300} fontSize='22px' color='primary' textAlign='center'>{contest.contestId}</Typography>
                        </Grid>
                    </Grid>

                    <Typography variant='body1' fontWeight={400} fontSize='30px' color='primary'>{contest.contestName}</Typography>
                    <Typography variant='body1' fontWeight={300} fontSize='24px' color='primary'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>

                    <Grid container display='flex' justifyContent='center' flexDirection='row'>
                        <Grid item xs={12} md={6} textAlign='center' paddingTop={2}>
                            <Button
                                variant='contained'
                                size='large'
                                color='primary'
                                href='/usuario/admin/elegir-ganador'>
                                elegir ganador
                            </Button>
                        </Grid>

                        <Grid item xs={12} md={6} textAlign='center' paddingTop={2}>
                            <Button
                                variant='contained'
                                size='large'
                                color='secondary'>
                                compartir sorteo
                            </Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Box>
    )
}
