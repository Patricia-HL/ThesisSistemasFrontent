export const textFieldStyle = (props) => ({
  background: props.style?.background || 'transparent',
  border: props.style?.border || '1px solid #ccc',
  borderRadius: props.style?.borderRadius || '8px',
  boxShadow: props.style?.boxShadow || 'none',
  color: props.style?.color || '',
  cursor: props.style?.cursor || '',
  display: props.style?.display || '',
  margin: props.style?.margin || '8px',

  padding: props.style?.padding || '',
  fontSize: props.style?.fontSize || '',
  width: props.style?.width || '',
});
