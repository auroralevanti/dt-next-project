
import { SubmitHandler, useForm } from 'react-hook-form';
import { useSnackbar } from 'notistack';

import { Typography, Box, Card, TextField, InputAdornment, Button } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import { GeneralLayout } from "../../components/layout";



interface Input {
  email: string,
  password: string
};

export default function Home() {

  const { enqueueSnackbar } = useSnackbar();

  const { register, handleSubmit, formState: { errors } } = useForm<Input>();

  const onSubmit: SubmitHandler<Input> = async ({ email, password }: Input) => {
    console.log(email, password);

    try {
      const connection = await fetch ('/api/login', {
        method: 'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      })

      const response = await connection.json();

      if(response.userId === 0){
        enqueueSnackbar('Usuario no válido', {
          variant:'error',
          autoHideDuration: 3000,
          anchorOrigin: {
              vertical: 'top',
              horizontal: 'center'
          }
      })
      }

    } catch (error) {
      enqueueSnackbar('Ha habido un error, intente de nuevo', {
        variant:'error',
        autoHideDuration: 3000,
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'center'
        }
      })
    }
  }


  return (
    <GeneralLayout title='Web App - Concursos - DevTalles'>

      <Box sx={{ backgroundColor:'#1e133b', display: 'flex', justifyContent: 'center', paddingTop: 10, paddingBottom: 20 }}>

        <Card sx={{ height: 'calc(65vh - 10px)', borderRadius: 2, borderColor: '#08440A', paddingRight: 2, paddingLeft: 2, paddingTop: 4 }}>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Typography
              variant='h5'
              sx={{ padding: '5px', textAlign: 'center' }}
            >
              Iniciar Sesión
            </Typography>
            <br />

            <TextField
              fullWidth
              variant='outlined'
              label='email'
              id='email'
              {...register('email', { required: true })}
              error={!!errors?.email}
              sx={{ paddingBottom: 5 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start' color='white'>
                    <PersonIcon color='primary' />
                  </InputAdornment>

                ),
              }}
            >

            </TextField>
            <br />

            <TextField
              fullWidth
              type='password'
              variant='outlined'
              label='contraseña'
              id='password'
              {...register('password', { required: true })}
              error={!!errors?.password}
              sx={{ textAlign: 'center', paddingBottom: 5 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <LockIcon color='primary' />
                  </InputAdornment>


                ),
              }}
            >

            </TextField>
            <br />

            <Box display='flex' justifyContent='center' flexDirection='column' >

              <Button
                variant='contained'
                type='submit'
                color='secondary'
                sx={{ borderRadius: 7, paddingLeft: 2, marginLeft: 2, marginBottom: 2 }}
              >Ingresar</Button>

              <Button
                variant='text'
                color='primary'
                size='small'
                sx={{ marginBottom: 20 }}
              /* onClick={passwordReset} */
              >  ¿Olvidó Contraseña? </Button>

            </Box>

          </form>
        </Card>

      </Box>

    </GeneralLayout >
  );
}
