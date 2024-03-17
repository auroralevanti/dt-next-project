import { SubmitHandler, useForm } from 'react-hook-form';
import { GeneralLayout } from '../../../../components/layout';
import { Box, Grid, Typography, Card, TextField, Button } from '@mui/material';


interface Input {
    name: string,
    email: string,
    password: string,
    discordId: string,
    discordName: string

}

const AgregarAdmin = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<Input>();

    const onSubmit: SubmitHandler<Input> = ({ name, email, password, discordId, discordName }: Input) => {
        console.log(name, email, password, discordId, discordName)
    }

    
  return (
    <GeneralLayout title='Agregar admin - DevTalles'>
        <Box display='flex' justifyContent='center' sx={{ height: 'calc(100vh-10px)', backgroundColor: '#1e133b' }}>
            <Grid container display='flex' justifyContent='center'>

                <Grid item xs={12} md={12} paddingTop={5}>
                    <Typography variant="body1" fontSize='30px' fontWeight={500} color='white' textAlign='left' paddingLeft={5}paddingBottom={2}>
                        Añadir nuevo Admin
                    </Typography>
                </Grid>

                <Card sx={{ height: 'calc(100vh - 100px)', backgroundColor: '#e8d2ff', borderRadius: 2, borderColor: '#08440A', paddingRight: 2, paddingLeft: 2, paddingTop: 4, margin: 10 }}>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Grid container display='flex' justifyContent='center' >
                            <Grid item xs={12} md={12}>
                                <TextField
                                    fullWidth
                                    autoFocus
                                    variant='filled'
                                    label='Nombre'
                                    id='name'
                                    {...register('name', { required: true })}
                                    error={!!errors?.name}
                                    sx={{ paddingBottom: 5 }}
                                >

                                </TextField>
                            </Grid>

                            <Grid item xs={12} md={12}>
                                <TextField
                                    fullWidth
                                    autoFocus
                                    variant='filled'
                                    label='email'
                                    id='email'
                                    {...register('email', { required: true })}
                                    error={!!errors?.email}
                                    sx={{ paddingBottom: 5 }}
                                >

                                </TextField>
                            </Grid>

                            <Grid item xs={12} md={12}>
                                <TextField
                                    fullWidth
                                    type='password'
                                    variant='filled'
                                    label='Passrod temporal'
                                    id='password'
                                    {...register('password', { required: true })}
                                    error={!!errors?.password}
                                    sx={{ paddingBottom: 5 }}
                                >

                                </TextField>

                            </Grid>

                            <Grid item xs={12} md={12}>
                                <TextField
                                    fullWidth
                                    variant='filled'
                                    label='Id de Discord'
                                    id='discordId'
                                    {...register('discordId', { required: true })}
                                    error={!!errors?.discordId}
                                    sx={{ paddingBottom: 5 }}

                                >

                                </TextField>
                            </Grid>

                            <Grid item xs={12} md={12}>
                                <TextField
                                    fullWidth
                                    variant='filled'
                                    label='Nombre en Discord'
                                    id='discordName'
                                    {...register('discordName', { required: true })}
                                    error={!!errors?.discordName}
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
                                    agregar
                                </Button>

                            </Box>
                        </Grid>

                    </form>
                    </Card>
                
            </Grid>

        </Box>
    </GeneralLayout>
  )
}

export default AgregarAdmin