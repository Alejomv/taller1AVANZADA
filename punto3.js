//Arreglo de dias de la semana
const diasSemana=[
    {dia: 'Lunes',temperaturaMaxima:30,temperaturaMinima:12},
    {dia:'Martes', temperaturaMaxima : 28 ,temperaturaMinima: -4 },
    {dia: 'Miercoles',temperaturaMaxima:25,temperaturaMinima:5},
    {dia: 'Jueves',temperaturaMaxima:17,temperaturaMinima:11},
    {dia: 'Viernes',temperaturaMaxima:22,temperaturaMinima:8},
    {dia: 'Sábado',temperaturaMaxima:27,temperaturaMinima:3},
    {dia: 'Domingo',temperaturaMaxima:31,temperaturaMinima:9},
]
 //funcion flecha que me retorna la temperatura media
const calcularTemperaturaMediaLuna = ({ temperaturaMaxima, temperaturaMinima }) => {
    const temperaturaMedia = (temperaturaMaxima + temperaturaMinima) / 2;
    return temperaturaMedia;
  };
  
  // Calcular la temperatura media de la luna para cada día de la semana con un metodo forEach para que me recorra cada elemento de mi arreglo
  diasSemana.forEach((dia) => {
    const temperaturaMediaLuna = calcularTemperaturaMediaLuna(dia);
    console.log(`Temperatura media de la luna el ${dia.dia}: ${temperaturaMediaLuna}°C`);
  });

