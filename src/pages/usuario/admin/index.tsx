import { Grid, Button } from '@mui/material';
import { GeneralLayout } from '../../../../components/layout';


const AdminEntry = () => {
    return (
        <GeneralLayout title='Admin - DevTalles'>

            <Grid container display='flex' justifyContent='center' spacing={3} padding={1} sx={{ height: 'calc(100vh)', backgroundColor: '#1e133b' }}>
                <Grid item textAlign='center' xs={12} md={4}>
                    <Button
                        variant='contained'
                        size='large'
                        color='secondary'
                        href='/usuario/admin/crear-concurso'>
                        crear concurso
                    </Button>
                </Grid>

                <Grid item textAlign='center' xs={12} md={4}>
                    <Button
                        variant='contained'
                        size='large'
                        color='secondary'>
                        concurso activo
                    </Button>
                </Grid>

                <Grid item textAlign='center' xs={12} md={4}>
                    <Button
                        variant='contained'
                        size='large'
                        color='secondary'>
                        agregar admin
                    </Button>
                </Grid>

                <Grid item textAlign='center' xs={12} md={4}>
                    <Button
                        variant='contained'
                        size='large'
                        color='secondary'>
                        participantes
                    </Button>
                </Grid>

                <Grid item textAlign='center' xs={12} md={4}>
                    <Button
                        variant='contained'
                        size='large'
                        color='secondary'>
                        historial concurso
                    </Button>
                </Grid>
            </Grid>

        </GeneralLayout>
    )
}

export default AdminEntry