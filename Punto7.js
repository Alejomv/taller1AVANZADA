// Función de flecha para encontrar el número más cercano a cero
const encontrarNumeroMasCercanoAZero = (numeros) => {
    let numeroMasCercano = numeros[0];
  
    for (let i = 1; i < numeros.length; i++) {
      const numeroActual = numeros[i];
      // Calcular el valor absoluto del número actual
      const valorAbsoluto = Math.abs(numeroActual);
  
      if (valorAbsoluto < Math.abs(numeroMasCercano)) {
        numeroMasCercano = numeroActual;
      }
    }
  
    return numeroMasCercano;
  };
  
  // 50 números enteros positivos o negativos (reemplaza con tus propios valores)
  const numeros = [10, -5, 3, -8, 15, -2, 7, 1, -6, 4, -9, 12, 6, -1, 8, 1, -3, 11, -7, 2];
  
  // Encontrar el número más cercano a cero
  const masCercano = encontrarNumeroMasCercanoAZero(numeros);
  console.log(`El número más cercano a cero es: ${masCercano}`);