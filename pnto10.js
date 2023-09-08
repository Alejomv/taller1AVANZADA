// Lista de alimentos
const alimentos = [
    { nombre: "Zanahoria", tipo: "vegetal", energia: 250 },
    { nombre: "Pollo", tipo: "animal", energia: 300 },
    { nombre: "Brócoli", tipo: "vegetal", energia: 180 },
    // Agrega más alimentos aquí...
];

// Función para filtrar alimentos vegetales con más de 200 unidades de energía
function filtrarAlimentos() {
    return alimentos.filter(alimento => alimento.tipo === "vegetal" && alimento.energia > 200);
}

// Función de callback para calcular la sumatoria de niveles de energía
function calcularSumatoria(alimentosFiltrados) {
    return alimentosFiltrados.reduce((total, alimento) => total + alimento.energia, 0);
}

// Función principal que ejecuta el proceso después de 5 segundos
function procesarAlimentos() {
    console.log("Iniciando procesamiento de alimentos...");
    setTimeout(() => {
        const alimentosFiltrados = filtrarAlimentos();
        const sumatoriaEnergia = calcularSumatoria(alimentosFiltrados);
        
        console.log("Alimentos vegetales con más de 200 unidades de energía:");
        alimentosFiltrados.forEach(alimento => {
            console.log(`${alimento.nombre} - Energía: ${alimento.energia}`);
        });

        console.log(`Sumatoria de niveles de energía de alimentos vegetales: ${sumatoriaEnergia}`);
    }, 5000); // Esperar 5 segundos (5000 milisegundos) antes de procesar
}

// Ejecutar la función principal
procesarAlimentos();
