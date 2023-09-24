var nota01, nota02, nome, media;

nome = prompt("Digite o nome do aluno:");
nota01 = prompt("Digite a nota 01 do aluno:");
nota02 = prompt("Digite a nota 01 do aluno:");

media = (parseInt(nota01) + parseInt(nota02)) / 2;

if (media >= 5) alert("O aluno foi aprovado:" + nome + media);
else alert("O Aluno foi reprovado:" + nome + media);
