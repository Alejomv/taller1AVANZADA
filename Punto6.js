// Función de flecha para encontrar la edad mayor y contar repeticiones
const encontrarEdadMayorYContarRepeticiones = (edades, codigos) => {
    let mayorEdad = edades[0];
    let contadorRepeticiones = 1;
  
    for (let i = 1; i < edades.length; i++) {
      if (edades[i] > mayorEdad) {
        mayorEdad = edades[i];
        contadorRepeticiones = 1;
      } else if (edades[i] === mayorEdad) {
        contadorRepeticiones++;
      }
    }
  
    return { mayorEdad, contadorRepeticiones };
  };
  
  // Generar 20 edades y 20 códigos aleatorios (esto es solo un ejemplo, debes obtener los valores reales)
  const edades = [25, 30, 22, 30, 35, 28, 30, 28, 25, 22, 25, 30, 35, 30, 28, 22, 35, 28, 25, 22];
  const codigos = ["ABC123", "DEF456", "GHI789", "JKL012", "MNO345", "PQR678", "STU901", "VWX234", "YZA567", "BCD890", "EFG123", "HIJ456", "KLM789", "NOP012", "QRS345", "TUV678", "WXY901", "ZAB234", "CDE567", "FGH890"];
  
  // Encontrar la edad mayor y contar repeticiones
  const resultado = encontrarEdadMayorYContarRepeticiones(edades, codigos);
  console.log(`La edad mayor es ${resultado.mayorEdad} y se repite ${resultado.contadorRepeticiones} veces.`);
  