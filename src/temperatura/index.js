import { convertidorGradosKelvin } from "./usecases/convertidos-kelvin";
import { convertidorGradosCelsius } from "./usecases/convertidor-celsius";

//variables
let estadoBoton = "on";

// Referencias del HTML
/**
 * @type {HTMLElement}
 */
const bottom = document.querySelector(".tabla__buttom");
const celsiusText = document.querySelector(".celsius");
const kelvinText = document.querySelector(".kelvin");
const iconNigth = document.querySelector(".nigth-change");
const tabla = document.querySelector(".tabla");
const autor__texto = document.querySelector(".autor__texto");
const input_kelvin = document.querySelector(".input_kelvin");
const input_celsius = document.querySelector(".input_celsius");
/**
 * @type {HTMLInputElement}
 */
const tabla__kelvin = document.querySelector(".tabla__kelvin");
/**
 * @type {HTMLInputElement}
 */
const tabla__celsius = document.querySelector(".tabla__celsius");

// Eventos
bottom.addEventListener("click", () => {
  if (estadoBoton === "on") {
    bottom.textContent = "celsius";
    celsiusText.style.color = "red";
    kelvinText.style.color = "black";
    input_kelvin.textContent = "CELSIUS:";
    input_celsius.textContent = "KELVIN:";
    tabla__celsius.value = "";
    tabla__kelvin.value = "";
    estadoBoton = "off";
  } else {
    bottom.textContent = "kelvin";
    kelvinText.style.color = "red";
    celsiusText.style.color = "black";
    input_kelvin.textContent = "KELVIN:";
    input_celsius.textContent = "CELSIUS:";
    tabla__celsius.value = "";
    tabla__kelvin.value = "";
    estadoBoton = "on";
  }
});

tabla__kelvin.addEventListener("input", () => {
  const valorKelvin = tabla__kelvin.value;
  let valorConvertido;

  if (estadoBoton === "on" && tabla__kelvin.value) {
      valorConvertido = convertidorGradosKelvin(valorKelvin);
  } else {
      valorConvertido = convertidorGradosCelsius(valorKelvin);
      tabla__celsius.value = '';
    }

  tabla__celsius.value = valorConvertido;
});

tabla__celsius.addEventListener("input", () => {
  const valorCelsius = tabla__celsius.value;
  let valorConvertido;

  if (estadoBoton === "on" && tabla__celsius.value) {
      valorConvertido = convertidorGradosCelsius(valorCelsius);
  } else {
      valorConvertido = convertidorGradosKelvin(valorCelsius);
      tabla__kelvin.value = '';
  }

  tabla__kelvin.value = valorConvertido;
});

iconNigth.addEventListener("click", () => {
  if (estadoBoton === "on") {
    iconNigth.innerHTML = '<i class="nigth-change fa-solid fa-moon"></i>';
    estadoBoton = "off";
    tabla.style.background = "#242424";
    autor__texto.style.color = "white";
  } else {
    tabla.style.background = "#C8C8C8";
    iconNigth.innerHTML = '<i class="day-change fa-solid fa-sun"></i>';
    estadoBoton = "on";
    autor__texto.style.color = "black";
  }
});
