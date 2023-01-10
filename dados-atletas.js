class Atleta {
    constructor(nome, idade, peso, altura, notas) {
      this.nome = nome;
      this.idade = idade;
      this.peso = peso;
      this.altura = altura;
      this.notas = notas;
      
    };
    calculaCategoria() {
      if(this.idade >= 9 && this.idade <= 11 ) {
        return "Categoria: Infantil";
      } else if (this.idade >= 12 && this.idade <= 13) {
          return "Categoria: Juvenil";
      } else if (this.idade >=14 && this.idade <= 15) {
        return "Categoria: Intermediário";
      } else if (this.idade >= 16 && this.idade <= 30) {
        return "Categoria: Adulto";
      } else {
        return "Sem categoria";
      }       
    }
            
    calculaIMC() {
      let imc = this.peso / (this.altura * this.altura);
      return `ÌMC: ${imc}`;
    }
  
    calculaMediaValida() {
      let soma = 0;
      this.notas = this.notas.sort();
      let notasComputadas = this.notas.slice(1,4);
      notasComputadas.forEach(function(nota) {
        soma += nota;
      })
      let media = soma / notasComputadas.length;
      return `Média válida: ${media}`;
    }
                  
    obtemNomeAtleta() {
      return `Nome: ${this.nome}`;
    }
  
    obtemIdadeAtleta() {
      return `Idade: ${this.idade}`;
    }
  
    obtemPesoAtleta() {
      return `Peso: ${this.peso}`;
    }
          
    obtemNotasAtleta() {
      return `Notas: ${this.notas}`;
    }
  
    obtemCategoria() {
      return this.calculaCategoria(atleta);
    }
  
    obtemIMC() {
      return this.calculaIMC(atleta);
    }
  
    obtemMediaValida() {
      return this.calculaMediaValida(atleta);
    }
  }
  
  const atleta = new Atleta ("Júlia Pereira",11, 54, 1.55,[7.0,6.2,8.9,8.0,10]);
  console.log(atleta.obtemNomeAtleta());
  console.log(atleta.obtemIdadeAtleta());
  console.log(atleta.obtemPesoAtleta());
  console.log("Altura: " + atleta.altura);
  console.log(atleta.obtemNotasAtleta());
  console.log(atleta.obtemCategoria());
  console.log(atleta.obtemIMC());
  console.log(atleta.obtemMediaValida());
  
