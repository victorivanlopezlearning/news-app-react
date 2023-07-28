import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import useNews from '../hooks/useNews';
import NewsItem from './NewsItem';

export default function ListNews() {

  const { news, totalNews, changePage, currentPage } = useNews();

  const totalPages = Math.ceil(totalNews / 12);

  return (
    <>
      <Typography
        textAlign={'center'}
        marginY={3}
        variant='string'
        component={'h2'}
      >
        Últimas Noticias
      </Typography>

      <Grid
        container
        spacing={3}
        alignItems={'stretch'}
        marginY={3}
      >
        {news?.map((news) => (
          <NewsItem
            key={news.url}
            news={news}
          />
        ))}
      </Grid>

      <Stack
        sx={{
          marginY: 5,
        }}
        spacing={2}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Pagination
          count={totalPages}
          color="primary"
          size='medium'
          page={currentPage}
          onChange={changePage}
        />
      </Stack>
    </>
  )
}
