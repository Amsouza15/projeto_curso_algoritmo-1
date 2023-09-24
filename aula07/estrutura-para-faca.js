function acaoBotao(){

    let numero, fatorial, contador;

    numero = prompt ("Digite um numero:");

    fatorial =1;

    for (contador = 1; contador <= numero; contador++) {
        fatorial = fatorial * contador;
        
    }
    
    document.getElementById("paragrafo").innerText = "O fatorial de um numero: " + numero + " é :" + fatorial;
}