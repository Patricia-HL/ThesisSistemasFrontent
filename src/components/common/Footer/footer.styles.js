import { makeStyles } from '@mui/styles';
export const useStyles = makeStyles((theme) => ({
  root_footer: {
    backgroundColor: theme.palette.primary.dark,
    //border: '2px solid #000000',

    color: theme.palette.primary.contrastText,
  },

  grid_footer: {
    padding: theme.spacing(1),

    textAlign: 'center',
    height: 'auto', // Ajusta automáticamente la altura según el contenido
  },
  title_footer: {
    color: theme.palette.primary.contrastText,
    fontWeight: 'bold',
    fontSize: '20px',
  },
  text_footer: {
    color: theme.palette.primary.contrastText,

    fontSize: '15px',
    textAlign: 'center',
    fontWeight: 'bold',
  },
}));
