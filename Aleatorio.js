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
        "Plátano": "Verdura",
        "Fresa": "fruta",
        "Uva": "fruta",
        "Tomate": "Verdura",
        "Pimiento": "Verdura",
        "Pepino": "Verdura",
        "Zanahoria": "vegetal",
        "Pollo": "animal",
        "Pescado": "animal",
        "Ternera": "animal",
        "Cerdo": "animal",
        "Brócoli": "vegetal",
        "Lechuga": "vegetal",
        "Espinaca": "Verdura",
        "Calabacín": "Verdura",
        "Berro": "Verdura"
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

// Verificar la lista de alimentos generada
console.log(alimentosAleatorios);
