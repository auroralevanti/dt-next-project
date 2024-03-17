
import { Box, Button, Card, Grid, InputLabel, TextField, Typography } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import 'dayjs/locale/en-gb';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { SubmitHandler, useForm } from 'react-hook-form';
import { GeneralLayout } from "../../../../components/layout";



interface Input {
    contestName: string,
    contestDescription: string,
    contestantNumber: string,
    maxNumber: string,

};


const CrearConcurso = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<Input>();

    const onSubmit: SubmitHandler<Input> = ({ contestName, contestDescription, contestantNumber, maxNumber }: Input) => {
        console.log(contestName, contestDescription, contestantNumber, maxNumber)
    }
    return (

        <GeneralLayout title='Crear Concurso - DevTalles'>

            <Box display='flex' justifyContent='center' sx={{ height: 'calc(100vh)', backgroundColor: '#1e133b' }}>
                
                <Card sx={{ height: 'calc(100vh - 100px)', backgroundColor: '#e8d2ff', borderRadius: 2, borderColor: '#08440A', paddingRight: 2, paddingLeft: 2, paddingTop: 4, margin: 10 }}>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Grid container display='flex' justifyContent='center' >
                            <Grid item xs={12} md={12}>
                                <TextField
                                    fullWidth
                                    variant='filled'
                                    label='Nombre del Concurso'
                                    id='contestName'
                                    {...register('contestName', { required: true })}
                                    error={!!errors?.contestName}
                                    sx={{ paddingBottom: 5 }}
                                >

                                </TextField>
                            </Grid>

                            <Grid item xs={12} md={12}>
                                <TextField
                                    fullWidth
                                    variant='filled'
                                    label='Descripción del Concurso'
                                    id='contestDescription'
                                    {...register('contestDescription', { required: true })}
                                    error={!!errors?.contestDescription}
                                    sx={{ paddingBottom: 5 }}
                                >

                                </TextField>
                            </Grid>

                            <Grid item textAlign='center' xs={12} md={6} sx={{ paddingBottom: 5 }}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <InputLabel sx={{ margin: 1 }}>Duración de la Inscripción</InputLabel>
                                    <DatePicker label='Seleccionar inicio' format="D/M/YYYY" />
                                </LocalizationProvider>

                            </Grid>

                            <Grid item textAlign='center' xs={12} md={6} sx={{ paddingBottom: 5 }}>
                                <LocalizationProvider dateAdapter={AdapterDayjs} >
                                    <InputLabel sx={{ margin: 1 }}>Duración de la Inscripción</InputLabel>
                                    <DatePicker label='Seleccionar fin' format="D/M/YYYY" />
                                </LocalizationProvider>

                            </Grid>

                            <Grid item xs={12} md={12}>
                                <TextField
                                    fullWidth
                                    variant='filled'
                                    label='Participantes Individual o por Equipo'
                                    id='contestantNumber'
                                    {...register('contestantNumber', { required: true })}
                                    error={!!errors?.contestantNumber}
                                    sx={{ paddingBottom: 5 }}
                                >

                                </TextField>

                            </Grid>

                            <Grid item xs={12} md={12}>
                                <TextField
                                    fullWidth
                                    type='password'
                                    variant='filled'
                                    label='Número máximo de participantes / equipos'
                                    id='maxNumber'
                                    {...register('maxNumber', { required: true })}
                                    error={!!errors?.maxNumber}
                                    sx={{ paddingBottom: 5 }}

                                >

                                </TextField>
                            </Grid>

                            <Box display='flex' justifyContent='center' >

                                <Button
                                    variant='contained'
                                    type='submit'
                                    color='inherit'
                                    size='large'
                                    sx={{ borderRadius: 7, paddingLeft: 2, marginLeft: 2, marginBottom: 2 }}
                                >
                                    crear concurso
                                </Button>

                            </Box>
                        </Grid>

                    </form>
                </Card>
            </Box>
        </GeneralLayout>

    )
}

export default CrearConcurso