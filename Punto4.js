// Función para contar sables de luz defectuosos con energía negativa
const contarSablesDefectuosos = (sables) => {
    let contador = 0;
    for (let i = 0; i < sables.length; i++) {
        if (sables[i] < 0) {
            contador++;
        }
    }
    return contador;
}

// Ejemplo de uso
const sablesDeLuz = [2, 4, -8, 5, -6];
const sablesDefectuosos = contarSablesDefectuosos(sablesDeLuz);

console.log(`La cantidad de sables defectuosos con energía negativa fue de ${sablesDefectuosos} sables.`);