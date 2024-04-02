
export const convertidorGradosKelvin = (kelvin) => {
  const formula = 273.15;
  const resultado = kelvin - formula
  return parseFloat(resultado.toFixed(2));
};

