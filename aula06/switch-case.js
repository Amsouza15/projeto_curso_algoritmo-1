function acaoBotao() {
  
  var valor01, valor02, operacao, resultado;

    valor01 = prompt(" Digite o valor01");
    operacao = prompt(" Digite a opercação desejada: Ex.: +, -, *, /");
    valor02 = prompt(" Digite o valor02");

    switch (operacao) {
      case "+":
        resultado = parseInt(valor01) + parseInt(valor02)
        break;
      case "-":
        resultado = parseInt(valor01) - parseInt(valor02)
        break;
      case "*":
        resultado = parseInt(valor01) * parseInt(valor02)
        break;
      case "/":
        resultado = parseInt(valor01) / parseInt(valor02)
        break;
}
document.getElementById("paragrafo").innerText= resultado;
}
