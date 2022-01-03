const PESO_80KG = 80;
const ALTURA_1M_78CM = 178;

function calculaImc () {
    const peso = PESO_80KG;
    const altura = ALTURA_1M_78CM;
  
    console.log(`Peso: ${peso}, Altura: ${altura}`);
  
    const imc = (peso / Math.pow(altura / 100, 2)).toFixed(2);
  
    console.log(`IMC: ${imc}`);
  }
  
  calculaImc();