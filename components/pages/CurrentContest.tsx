
import { Raleway } from 'next/font/google';

import { Box, Button, Card, Grid, TextField, Typography } from "@mui/material";
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';



interface Input {
    idUserDiscord: string,
    nameUserDiscord: string
}


export const CurrentContest = () => {

    const router = useRouter();

    const { register, handleSubmit, formState: { errors } } = useForm<Input>();

    const onSubmit: SubmitHandler<Input> = async({ idUserDiscord, nameUserDiscord }: Input) => {

        try {
            const backToSave = await fetch('/api/contestants/getInContest', {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ idUserDiscord, nameUserDiscord })
            })

            const response = await backToSave.json();

            if(response.Objeto.transaction.resultado === true){
                router.replace('/concursante/ingreso-exitoso')
            };

            if(response.Objeto.transaction.resultado === false){
                router.replace('/concursante/ingreso-fallido')
            };
            
        } catch (error) {

            router.replace('/concursante/ingreso-fallido');
            
        }

    }

    return (
        <Box sx={{ height: '100%', backgroundColor: '#1e133b' }}>

            <Grid container display='flex' justifyContent='center' padding={10}>
                <Grid item xs={12} md={12} padding={1} display='flex' justifyItems='left' paddingLeft={5}>
                    <Typography variant="body1" textAlign='center' fontWeight={300} fontSize='24px' color='white' >¡El desafío comienza!</Typography>
                   
                </Grid>

                <Grid item xs={12} md={12} padding={1} display='flex' justifyItems='left' paddingLeft={10}>
                    <Typography variant="body1" textAlign='center' fontWeight={600} fontSize='40px' color='white' >CodeQuest 2024</Typography>
                </Grid>

                
                    <Card sx={{ backgroundColor:'#e8d2ff', paddingRight: 2, paddingLeft: 2, paddingTop: 4, paddingBottom: 4 }}>
                       
                        <Typography variant='body1' fontWeight={300} fontSize='20px'paddingBottom={1}>Su misión es desarrollar <b>una webapp</b> usando cualquier tecnología usada en los cursos de Fernando.</Typography>
                        <Typography variant='body1' fontWeight={300} fontSize='20px' paddingBottom={1}>Siguiendo las reglas que se encuentran en el Reglamento del concurso <b>descarga aquì.</b>  </Typography>
                        <Typography variant='body1' fontWeight={300} fontSize='20px' paddingBottom={5}>Para formar parte solo debes llenar los datos requeridos y seguir las reglas. </Typography>

                        <form onSubmit={handleSubmit(onSubmit)}>
       
                            <TextField
                                fullWidth
                                autoFocus
                                variant='filled'
                                label='ID de Discord'
                                id='idUserDiscord'
                                {...register('idUserDiscord', { required: true })}
                                error={!!errors?.idUserDiscord}
                                sx={{ paddingBottom: 5 }}
                                >

                             </TextField>
                            <br />
           
                            <TextField
                            fullWidth
                            variant='filled'
                            label='Nombre Usuario en Discord'
                            id='nameUserDiscord'
                            {...register('nameUserDiscord', { required: true })}
                            error={!!errors?.nameUserDiscord}
                            sx={{ textAlign: 'center', paddingBottom: 5 }}
                            >

                            </TextField>
                            <br />

                            <Box display='flex' justifyContent='center' flexDirection='column'  >

                            <Button
                                variant='contained'
                                type='submit'
                                color='inherit'
                                sx={{ borderRadius: 7, alignSelf:'center'}}
                            >
                                Enviar
                            </Button>


                            </Box>

                         </form>
                    
                    </Card>

                
            </Grid>
        </Box>
    )
}
