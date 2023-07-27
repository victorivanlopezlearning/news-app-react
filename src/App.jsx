import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Form from './components/Form';

export default function App() {
  return (
    <Container>
      <header>
        <Typography
          component="h1"
          variant="h4"
          align='center'
          marginY={5}
          sx={{ textTransform: 'uppercase' }}
        >
          Buscador de Noticias
        </Typography>
      </header>

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          item
          lg={8}
          md={6}
          xs={12}
        >
          <Form />
        </Grid>
      </Grid>
    </Container>
  )
}

