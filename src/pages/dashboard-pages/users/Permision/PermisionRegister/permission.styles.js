export const containerStyle = {
  root: {
    display: "flex",
    border: "1px solid blue",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "16px",
    minHeight: "80vh",
  },
  paperStyle: {
    // Define aquí los estilos personalizados para el papel
    backgroundColor: "linear-gradient(45deg, #FE6B8B 80%, #FF8E53 50%)",
    borderRadius: "10px",
  },

  paper_content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "linear-gradient(45deg, #FE6B8B, #FF8E  80%)",
    justifyContent: "space-between",
    padding: "50px 10px 20px 10px",
    borderRadius: "10px",
  },
  formStyle: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatarStyle: {
    width: "50px",
    height: "50px",
    margin: "8px",
    marginTop: "20px",
  },
  inputStyle: {
    // color: 'yellow',
    fontWeight: "bold",
    width: "18rem",
    marginBottom: "10px",
    //margin-bottom
    backgroundImage:
      "radial-gradient(circle at center, rgb(189, 195, 40) 0.00%,rgb(255, 0, 65) 100.00%)",
    // margin: '5px 10px 5px 10px',
  },

  buttonStyle: {
    background: " red ",
    // border: '1px solid white',
    borderRadius: "25px",
    border: "1px solid red",
    width: "12rem",
    fontWeight: "bold",
    padding: "10px 10px 10px 10px",
    margin: "20px 0 0px 0",
    color: " white",
    // Otros estilos personalizados para botones
  },
  error: {
    backgroundColor: "red",
    color: "white",
  },
};
