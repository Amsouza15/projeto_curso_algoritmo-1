function acaoBotao() {
  let nome, idade, limite, contador;

  limite = prompt(" Digite o limite de vez você deseja verificar a idade:");
  contador = 0;

  while (contador < limite) {
    nome = prompt(" Digite o nome da pessoa:");
    idade = prompt("Digite a idade da pessoa :" + nome);
    if (idade > 18) {
      let maior = document.getElementById("paragrafo");
      maior.innerText =  nome + " Você é maior de idade!";
    } else {
      let menor = document.getElementById("paragrafo"); 
      menor.innerText = nome + " Você é menor de idade!";
    }

    contador++;
  }
}
