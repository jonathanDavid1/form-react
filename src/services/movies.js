export const validationNameInput = {
  required: {
    value: true,
    message: "Este campo es requerido",
  },
  maxLength: {
    value: 15,
    message: "Excedes la cantidad caracteres, maximo 15",
  },
  minLength: {
    value: 4,
    message: "Mínimo 4 caracteres",
  },
  pattern: {
    value: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
    message: "No cumple con el formato de contraseña",
  },
};
