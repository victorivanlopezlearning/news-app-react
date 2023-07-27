import { FormControl, InputLabel, Select, MenuItem, Button, Box } from '@mui/material';
import useNews from '../hooks/useNews';

const CATEGORIES = [
  { value: 'general', label: 'General' },
  { value: 'business', label: 'Negocios' },
  { value: 'entertainment', label: 'Entretenimiento' },
  { value: 'health', label: 'Salud' },
  { value: 'science', label: 'Ciencia' },
  { value: 'sports', label: 'Deportes' },
  { value: 'technology', label: 'Tecnología' },
]

export default function Form() {

  const { category, changeCategory } = useNews();

  return (
    <form>
      <FormControl fullWidth>
        <InputLabel>Categoría</InputLabel>
        <Select
          label="Categoría"
          onChange={changeCategory}
          value={category}
        >
          {CATEGORIES.map(({ value, label }) => (
            <MenuItem
              key={value}
              value={value}
            >
              {label}
            </MenuItem>
          ))}
        </Select>

        <Box
          sx={{ marginTop: 2 }}
        >
          <Button
            fullWidth
            variant='contained'
            size='large'
          >
            Buscar Noticias
          </Button>
        </Box>
      </FormControl>
    </form>
  )
}
