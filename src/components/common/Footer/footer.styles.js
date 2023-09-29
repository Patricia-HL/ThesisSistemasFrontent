import { makeStyles } from "@mui/styles";
export const useStyles = makeStyles((theme) => ({
  root_footer: {
    // backgroundColor: theme.palette.primary.dark,
    backgroundColor: "red",
    //border: '2px solid #000000',

    color: theme.palette.primary.contrastText,
  },
  avatars: {
    //border: "1px solid blue",
    flexDirection: "row",
    margin: theme.spacing(1),
    padding: theme.spacing(1),
  },
  grid_footer: {
    padding: theme.spacing(1),
    justifyContent: "center",
    textAlign: "center",
    height: "auto", // Ajusta automáticamente la altura según el contenido
  },
  title_footer: {
    color: theme.palette.primary.contrastText,
    fontWeight: "bold",
    fontSize: "20px",
  },
  text_footer: {
    color: theme.palette.primary.contrastText,

    fontSize: "15px",
    textAlign: "center",
    fontWeight: "bold",
  },
}));
