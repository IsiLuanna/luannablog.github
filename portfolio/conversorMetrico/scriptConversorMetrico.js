function converter() {
  const metros = parseFloat(document.getElementById("metros").value);
  const centimetros = metros * 100;
  document.getElementById("resultado").textContent = metros + " metros é igual a " + centimetros + " centímetros.";
}