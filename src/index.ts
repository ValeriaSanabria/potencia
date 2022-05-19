let base: number = 2;
let exponente: number = 2;



/*function potenciaDeUnNumero(base: number, exponente: number): number {
  return Math.pow(base, exponente);
};*/


function potenciaDeUnNumero(base: number, exponente: number): number{
  let numero: number = 1;

  if(exponente === 0) {
    return 1;
  } else {
    for(let i=1; i<= exponente; i++) {
      numero = numero * base;
    };
    return numero;
  }
}

console.log("La potencia es: " + potenciaDeUnNumero(base, exponente));