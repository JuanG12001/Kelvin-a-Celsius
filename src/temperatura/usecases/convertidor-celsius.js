export const convertidorGradosCelsius = (celsius) => {
  const formula = 273.15; 
  const resultado = parseFloat(celsius) + formula; 
  return parseFloat(resultado.toFixed(2));
};