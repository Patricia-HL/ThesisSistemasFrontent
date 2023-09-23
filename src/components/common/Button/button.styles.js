/*import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "red",
    height: 48,
    padding: "0 30px",
  },
  textfield: {
    width: "100%",

    borderRadius: 20,
  },
});
*/
export const buttonStyle = (props) => ({
  background:
    props.style?.background ||
    'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: props.style?.border || 'none',
  borderRadius: props.style?.borderRadius || '10px',
  boxShadow: props.style?.boxShadow || '0 3px 5px 2px rgba(255, 105, 135, 0.3)',
  color: props.style?.color || 'white',
  cursor: props.style?.cursor || 'pointer',
  display: props.style?.display || 'inline-block',
  margin: props.style?.margin || '5px',

  padding: props.style?.padding || '',

  width: props.style?.width || '',
  height: props.style?.height || '',
  fontSize: props.style?.fontSize || '',
  fontWeight: props.style?.fontWeight || '',
  textTransform: props.style?.textTransform || 'none',
  letterSpacing: props.style?.letterSpacing || '',
  textAlign: props.style?.textAlign || '',
  textDecoration: props.style?.textDecoration || '',
  boder: props.style?.boder || 'none',

  // Otros estilos
});
