// Función tradicional para calcular la distancia entre dos planetas en UA
function calcularDistancia(x1, y1, x2, y2) {
    const distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    return distancia;
  }
  
  // Coordenadas de los planetas
  const xNaboo = 0;
  const yNaboo = 0;
  const xPlaneta = 5; // Reemplaza con las coordenadas del planeta en UA
  const yPlaneta = 12; // Reemplaza con las coordenadas del planeta en UA
  
  // Calcular la distancia entre Naboo y el planeta
  const distancia = calcularDistancia(xNaboo, yNaboo, xPlaneta, yPlaneta);
  console.log(`La distancia entre Naboo y el planeta es ${distancia} UA.`);

  