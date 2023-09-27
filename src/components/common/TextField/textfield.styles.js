export const textFieldStyle = (props) => ({
  background: props.style?.background || 'transparent',
  border: props.style?.border || '1px solid #ccc',
  borderRadius: props.style?.borderRadius || '70px',
  boxShadow: props.style?.boxShadow || 'none',
  color: props.style?.color || '',
  cursor: props.style?.cursor || '',
  display: props.style?.display || '',
  margin: props.style?.margin || '',

  padding: props.style?.padding || '',
  fontSize: props.style?.fontSize || '',
  width: props.style?.width || '',
});
export const customStyles = {
  label: {
    color: 'white', // Color del texto del label
    '& > *': {
      margin: '0px', // Ajusta el espaciado aquí según tus necesidades
    },
  },
  labelFocused: {
    color: 'white',
    fontWeight: 'bold',
  },
  inputUnderlineAfter: {
    borderBottomColor: 'green',
  },
  outlinedInputRoot: {
    backgroundColor: 'red',
    borderRadius: '1rem',
    color: 'white',
  },
  outlinedInputFieldset: {
    borderColor: 'yellow',
  },
  outlinedInputFieldsetHover: {
    borderColor: 'yellow',
    color: 'white',
  },
  outlinedInputFieldsetFocused: {
    borderColor: 'red',
  },
};
