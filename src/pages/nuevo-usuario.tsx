import { SubmitHandler, useForm } from 'react-hook-form';
import { GeneralLayout } from '../../components/layout';
import { Box, Grid, Typography, Card, TextField, Button, InputLabel, Select, MenuItem } from '@mui/material';


interface Input {
    userName: string,
    userEmail: string,
    userPassword: string,
    discordId: string,
    discordName: string,
    userRole: string,
    discordMemberSince: string

}

const AgregarUsuario = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<Input>();

    const onSubmit: SubmitHandler<Input> = async({ userName, userEmail, userPassword, discordId, discordName, userRole='Participant', discordMemberSince }: Input) => {
        console.log(userName, userEmail, userPassword, discordId, discordName, userRole, discordMemberSince)

        const sendInfo = await fetch('/api/createUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({userName, userEmail, userPassword, discordId, discordName, userRole, discordMemberSince})
        })

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

                <Card sx={{ backgroundColor: '#e8d2ff', borderRadius: 2, borderColor: '#08440A', paddingRight: 2, paddingLeft: 2, paddingTop: 4,  margin: 10 }}>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Grid container display='flex' justifyContent='center' >
                            <Grid item xs={12} md={12}>
                                <TextField
                                    fullWidth
                                    variant='filled'
                                    label='Nombre'
                                    id='userName'
                                    {...register('userName', { required: true })}
                                    error={!!errors?.userName}
                                    sx={{ paddingBottom: 5 }}
                                >

                                </TextField>
                            </Grid>

                            <Grid item xs={12} md={12}>
                                <TextField
                                    fullWidth
                                    variant='filled'
                                    label='email'
                                    id='userEmail'
                                    {...register('userEmail', { required: true })}
                                    error={!!errors?.userEmail}
                                    sx={{ paddingBottom: 5 }}
                                >

                                </TextField>
                            </Grid>

                            <Grid item xs={12} md={12}>
                                <TextField
                                    fullWidth
                                    type='password'
                                    variant='filled'
                                    label='Password temporal'
                                    id='userPassword'
                                    {...register('userPassword', { required: true })}
                                    error={!!errors?.userPassword}
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

                            <Grid item xs={12} md={12}>
                                <TextField
                                    fullWidth
                                    variant='filled'
                                    label='Miembro del canal Discord desde'
                                    id='discordMemberSince'
                                    {...register('discordMemberSince', { required: true })}
                                    error={!!errors?.discordMemberSince}
                                    sx={{ paddingBottom: 5 }}

                                >

                                </TextField>
                            </Grid>

                            <Box display='flex' justifyContent='center' marginTop={2} marginBottom={4} >

                                <Button
                                    variant='contained'
                                    type='submit'
                                    color='inherit'
                                    size='large'
                                    sx={{ borderRadius: 7, paddingLeft: 2, marginLeft: 2, marginBottom: 2,}}
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

export default AgregarUsuario