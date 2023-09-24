function acaoBotao() {
  let valor01, valor02, operacao, resultado;

  valor01 = prompt(" Digite o valor01 da operação:");
  operacao = prompt(" Digite a operação que deseja: Ex.: -, +, *, /");
  valor02 = prompt(" Digite o valor02 da operação:");

  if (operacao == "+") {
    resultado = parseInt(valor01) + parseInt(valor02);
  } else if (operacao == "+") {
    resultado = parseInt(valor01) + parseInt(valor02);
  } else if (operacao == "*") {
    resultado = parseInt(valor01) * parseInt(valor02);
  } else if (operacao == "/") {
    resultado = parseInt(valor01) / parseInt(valor02);
  }

  document.getElementById("paragrafo").innerText = resultado;
}