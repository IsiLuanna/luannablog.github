
function calcular(operacao) {
  const num1 = parseFloat(document.getElementById('number1').value);
  const num2 = parseFloat(document.getElementById('number2').value);
  let resultado;

  switch (operacao) {
    case 'soma':
      resultado = num1 + num2;
      break;
    case 'subtracao':
      resultado = num1 - num2;
      break;
    case 'multiplicacao':
      resultado = num1 * num2;
      break;
    case 'divisao':
      resultado = num2 !== 0 ? num1 / num2 : 'Não é possível dividir por zero';
      break;
  }

  document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
}
