// Función para crear un objeto Padawan
const crearPadawan = (nombre, planeta, edad, estatura) => {
    return {
      nombre: nombre,
      planeta: planeta,
      edad: edad,
      estatura: estatura,
    };
  };
// Función secundaria para clasificar y mostrar la actividad del Padawan
const clasificarPadawan = (padawan) => {
    if (padawan.edad <= 15) {
      console.log(`${padawan.nombre} Su actividad asignada será el manejo de fuerza.`);
    } else {
      console.log(`${padawan.nombre} Su actividad asignada será el manejo del sable de luz.`);
  }
};


// Crear un arreglo de objetos Padawan
const padawans = [
    crearPadawan('Luke', 'Marte', 19, 1.75),
    crearPadawan('Tano', 'Venus', 12, 1.70),
    crearPadawan('Kenobi', 'Saturno', 25, 1.82)
  ];
  
  // Clasificar y mostrar la actividad de cada Padawan
  //padawans es mi arreglo de objetos y padawan es mi axiliar para recorrelo y mostrarlos todos al tiempo
  padawans.forEach((padawan) => {
    const actividad = clasificarPadawan(padawan);
    console.log(actividad);
  });