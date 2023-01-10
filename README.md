# dados-atletas
Projeto 2 de Certificação do DEVstart [Senac/SC]
---------------------------------------------------

Aplicação em javascript que recebe informações de um atleta, calcula parâmetros e exibe para o usuário.
É realizada a criação de uma classe "Atleta" com os atributos nome, idade, peso, altura e notas.
A classe deve possuir os seguintes métodos:

- calculaCategoria(), para calcular a categoria do atleta;
- calculaIMC(), para calcular o IMC do atleta;
- calculaMediaValida(), para calcular a média válida do atleta.
- obtemNomeAtleta(), que retorna o nome do atleta
- obtemIdadeAtleta(), que retorna a idade do atleta
- obtemPesoAtleta(), que retorna o peso do atleta
- obtemNotasAtleta(), que retorna as notas do atleta
- obtemCategoria(), que retorna a categoria do atleta
- obtemIMC(), que retorna o IMC do atleta
- obtemMediaValida(), que retorna a média válida do atleta

REGRAS:

1. Para calcular a categoria

 - Infantil: 9 a 11 anos

 - Juvenil: 12 e 13 anos

 - Intermediário: 14 e 15 anos

 - Adulto: 16 a 30 anos

 - Sem categoria: demais idades

2. Para calcular o IMC

Fórmula: imc = peso / (altura x altura)

3. Para calcular a média válida

Método: Utilize o metodologia abordada no Projeto de Certificação 1 [ver repositório "notas-atletas"].

Exemplo de entrada

// Declara o atleta

const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);
    
Exemplo de saída

Nome: Cesar Abascal

Idade: 30

Peso: 80

Altura: 1.7

Notas: 10,9.34,8.42,10,7.88

Categoria: Adulto

IMC: 27.68166089965398

Média válida: 8.766666666666666

