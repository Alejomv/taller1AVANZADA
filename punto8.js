//solucion del taller punto ocho

let planeta1={
    nombre:"Tierra",
    latitud:80.67,
    longitud:109.10,
    nivelOxigeno:0.05,
    volumenAgua:0.75
}
let planeta2={
    nombre:"Venus",
    latitud:46.67,
    longitud:67.10,
    nivelOxigeno:0.89,
    volumenAgua:0.34
}
let planeta3={
    nombre:"Marte",
    latitud:98.67,
    longitud:78.10,
    nivelOxigeno:0.24,
    volumenAgua:0.65
}
let planeta4={
    nombre:"Mercurio",
    latitud:98.67,
    longitud:78.10,
    nivelOxigeno:-24,
    volumenAgua:0.3
}
let planeta5={
    nombre:"Saturno",
    latitud:98.67,
    longitud:78.10,
    nivelOxigeno:-24,
    volumenAgua:0
}
let planeta6={
    nombre:"Tierra",
    latitud:80.67,
    longitud:109.10,
    nivelOxigeno:0.05,
    volumenAgua:0.75
}
let planeta7={
    nombre:"Venus",
    latitud:46.67,
    longitud:67.10,
    nivelOxigeno:0.89,
    volumenAgua:0.34
}
let planeta8={
    nombre:"Marte",
    latitud:98.67,
    longitud:78.10,
    nivelOxigeno:0.24,
    volumenAgua:0.65
}
let planeta9={
    nombre:"Mercurio",
    latitud:98.67,
    longitud:78.10,
    nivelOxigeno:-24,
    volumenAgua:0.3
}
let planeta10={
    nombre:"Saturno",
    latitud:98.67,
    longitud:78.10,
    nivelOxigeno:-24,
    volumenAgua:0
}
let planeta11={
    nombre:"Tierra",
    latitud:80.67,
    longitud:109.10,
    nivelOxigeno:0.05,
    volumenAgua:0.75
}
let planeta12={
    nombre:"Venus",
    latitud:46.67,
    longitud:67.10,
    nivelOxigeno:0.89,
    volumenAgua:0.34
}
let planeta13={
    nombre:"Marte",
    latitud:98.67,
    longitud:78.10,
    nivelOxigeno:0.24,
    volumenAgua:0.65
}
let planeta14={
    nombre:"Mercurio",
    latitud:98.67,
    longitud:78.10,
    nivelOxigeno:-24,
    volumenAgua:0.3
}
let planeta15={
    nombre:"Saturno",
    latitud:98.67,
    longitud:78.10,
    nivelOxigeno:-24,
    volumenAgua:0
}
let planetas = [planeta1,planeta2,planeta3,planeta4,planeta5,planeta6,planeta7,planeta8,planeta9,planeta10,planeta11,planeta12,planeta13,planeta14,planeta15]

let sumarCantidadAgua=planetas.map(function(planeta){
    return planeta.volumenAgua;
}).reduce(function(total,agua){
    return total+agua;},0);
let CalcularOxigeno=planetas.map(function(planeta){
        return planeta.nivelOxigeno;
 }).reduce(function(total,oxigeno){
        return total+oxigeno*100;},0);
let analizarOxigeno=planetas.filter(function(planeta){
    return (planeta.nivelOxigeno<0)
}) 
let analizarVolumenagua=planetas.filter(function(planeta){
    return (planeta.volumenAgua==0)
})  

console.log("----Analisis de planetas---");    
console.log("La suma total de agua entre los planetas es de: ",sumarCantidadAgua);
console.log(`El porcentaje de oxígeno en la Tierra es: `,CalcularOxigeno);
console.log("Los planetas con nivel de oxigeno negativo son: ",analizarOxigeno)
console.log("Los planetas que no tienen agua son: ",analizarVolumenagua)
