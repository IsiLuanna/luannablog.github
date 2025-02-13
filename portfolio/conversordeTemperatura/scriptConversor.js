function calcularFahrenheit() {
  const celsius = parseFloat(document.getElementById('celsius').value);
  if (!isNaN(celsius)) {
    let fahrenheit = (celsius * 9 / 5) + 32;
    document.getElementById('resultado').innerHTML = `${celsius}°C = ${fahrenheit.toFixed(1)}°F`;
  } else {
    document.getElementById('resultado').innerHTML = 'Por favor, digite um número válido';
  }
}