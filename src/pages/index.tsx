import { useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useSnackbar } from 'notistack';

import { Typography, Box, Card, TextField, InputAdornment, Button } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import { GeneralLayout } from "../../components/layout";
import { AuthContext } from '../../context';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';


interface Input {
  email: string,
  password: string
};

export default function Home() {

  const router = useRouter();

  const { enqueueSnackbar } = useSnackbar();

  const { register, handleSubmit, formState: { errors } } = useForm<Input>();

  const onSubmit: SubmitHandler<Input> = async ({email, password}: Input) => {
    console.log(email, password);
   
    try {
            
      const response = await fetch('/api/login', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({email, password}),
      });

      const envio = await response.json();
      const { token, user } = envio;
      console.log('ususario provider:', user)

      Cookies.set('token', token);
     

      if(user.isValid === true && user.role === 'admin' ){
          enqueueSnackbar('Entrada como administrador', {
              variant:'success',
              autoHideDuration: 3000,
              anchorOrigin: {
                  vertical: 'top',
                  horizontal: 'center'
              }
          })
          
          return router.push('/usuario/admin');
      }; 

      if(user.isValid === true && user.role === 'Participant'){
          enqueueSnackbar('Bienvenido' ,{
              variant:'success',
              autoHideDuration: 3000,
              anchorOrigin: {
                  vertical:'top',
                  horizontal:'center'
              }
          })

          return router.push('/usuario/concursante');
      };
      
      if(user.isValid === false ) {
          enqueueSnackbar('Usuario y/o Contraseña incorrectos', {
              variant: 'warning',
              autoHideDuration: 6000,
              anchorOrigin: {
                  vertical: 'top',
                  horizontal: 'center'
              }
          })
          
      };


  } catch (error) {

  }

  }


  return (
    <GeneralLayout title='Web App - Concursos - DevTalles'>

      <Box sx={{ backgroundColor:'#1e133b', display: 'flex', justifyContent: 'center', paddingTop: 10, paddingBottom: 20 }}>

        <Card sx={{ height: 'calc(100vh - 10px)', borderRadius: 2, borderColor: '#08440A', paddingRight: 2, paddingLeft: 2, paddingTop: 4 }}>

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

              <Button
                variant='text'
                color='primary'
                size='small'
                sx={{ marginBottom: 20 }}
                href='/nuevo-usuario'
              >  Nuevo Usuario </Button>
            </Box>

          </form>
        </Card>

      </Box>

    </GeneralLayout >
  );
}
