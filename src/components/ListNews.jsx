import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import useNews from '../hooks/useNews';
import NewsItem from './NewsItem';

export default function ListNews() {

  const { news } = useNews();

  return (
    <>
      <Typography
        textAlign={'center'}
        marginY={5}
        variant='string'
        component={'h2'}
      >
        Últimas Noticias
      </Typography>

      <Grid
        container
        spacing={3}
      >
        {news?.map((news) => (
          <NewsItem
            key={news.url}
            news={news}
          />
        ))}
      </Grid>
    </>
  )
}
