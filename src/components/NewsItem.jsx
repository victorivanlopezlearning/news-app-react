import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function NewsItem({ news }) {

  const { urlToImage, url, description, title, source: { name } } = news;

  return (
    <Grid
      item
      md={6}
      lg={4}
      xs={12}
      sx={{display: 'flex'}}
    >
      <Card sx={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>
        <CardMedia
          component="img"
          sx={{ height: 250 }}
          image={urlToImage}
          title={`Imagen noticia - ${title}`}
        />
        <CardContent>
          <Typography gutterBottom variant="body2" color='error'>
            {name}
          </Typography>
          <Typography gutterBottom variant="h5" component="h3">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            fullWidth
            href={url}
            target='_blank'
            size="medium"
          >
            Leer Noticia
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}
