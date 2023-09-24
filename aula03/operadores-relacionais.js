/*
Var
// Seção de Declarações das variáveis 
    nota01, nota02: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
     escreval (" Digite a nota 01 do aluno:")
     leia(nota01)
     escreval (" Digite a nota 02 do aluno:")
     leia(nota02)
     
     se (nota01 <> nota02) entao
     escreval ("Notas diferentes")
     senão
     escreval ("Notas iguais")
     fimse
*/

var nota01, nota02;
nota01 = prompt (" Digite a nota 01 do aluno:");
nota02 = prompt (" Digite a nota 02 do aluno:");

if (parseInt (nota01) != parseInt (nota02)) 
     alert("Notas diferentes")
     else
     alert("iguais")