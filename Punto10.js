
// Función para generar un nombre aleatorio
function generarNombre() {
    const nombres = ["Manzana", "Pera", "Plátano", "Fresa", "Uva", "Tomate", "Pimiento", "Pepino", "Zanahoria", "Pollo", "Pescado", "Ternera", "Cerdo", "Brócoli", "Lechuga", "Espinaca", "Calabacín", "Berro"];
    return nombres[Math.floor(Math.random() * nombres.length)];
}

// Función para asignar un tipo basado en el nombre del alimento
function asignarTipoPorNombre(nombre) {
    const tiposEspeciales = {
        "Manzana": "fruta",
        "Pera": "fruta",
        "Plátano": "fruta",
        "Fresa": "fruta",
        "Uva": "fruta",
        "Tomate": "vegetal",
        "Pimiento": "vegetal",
        "Pepino": "vegetal",
        "Zanahoria": "vegetal",
        "Pollo": "animal",
        "Pescado": "animal",
        "Ternera": "animal",
        "Cerdo": "animal",
        "Brócoli": "vegetal",
        "Lechuga": "vegetal",
        "Espinaca": "vegetal",
        "Calabacín": "vegetal",
        "Berro": "vegetal"
    };

    // Si el nombre está en la lista de tipos especiales, lo usamos; de lo contrario, generamos aleatoriamente.
    return tiposEspeciales[nombre] || generarTipoAleatorio();
}

// Función para generar un tipo aleatorio
function generarTipoAleatorio() {
    const tipos = ["vegetal", "animal", "insecto"];
    return tipos[Math.floor(Math.random() * tipos.length)];
}

// Función para generar un nivel de energía aleatorio entre 100 y 500
function generarEnergia() {
    return Math.floor(Math.random() * (500 - 100 + 1)) + 100;
}

// Generar 300 alimentos aleatorios
const alimentosAleatorios = [];
for (let i = 0; i < 300; i++) {
    const nombre = generarNombre();
    const tipo = asignarTipoPorNombre(nombre);
    const alimento = {
        nombre: nombre,
        tipo: tipo,
        energia: generarEnergia()
    };
    alimentosAleatorios.push(alimento);
}

// Función para filtrar alimentos vegetales con más de 200 unidades de energía
function filtrarAlimentosVegetales() {
    return alimentosAleatorios.filter(alimento => alimento.tipo === "vegetal" && alimento.energia > 200);
}

// Función de callback para calcular la sumatoria de niveles de energía
function calcularSumatoria(alimentosFiltrados) {
    return alimentosFiltrados.reduce((total, alimento) => total + alimento.energia, 0);
}

// Función principal que ejecuta el proceso después de 5 segundos
function procesarAlimentos() {
    console.log("Iniciando procesamiento de alimentos...");
    setTimeout(() => {
        const alimentosFiltrados = filtrarAlimentosVegetales();
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
