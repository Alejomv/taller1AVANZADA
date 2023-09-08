// Función tradicional para calcular el salario mensual de un vendedor
function calcularSalarioMensual(ventas) {
    const salarioBase = 3500000;
    const comisionPorVenta = 1500000;
    const impuestos = 0.05;
  
    const comisionTotal = ventas * comisionPorVenta;
    const salarioAntesDeImpuestos = salarioBase + comisionTotal;
    const salarioDespuesDeImpuestos = salarioAntesDeImpuestos * (1 - impuestos);
  
    return salarioDespuesDeImpuestos;
  }
  
  // Ventas realizadas por el vendedor (reemplaza con la cantidad de licencias vendidas)
  const ventas = 5;
  
  // Calcular y mostrar el salario mensual del vendedor
  const salario = calcularSalarioMensual(ventas);
  console.log(`El salario mensual del vendedor es: $${salario}`);
  