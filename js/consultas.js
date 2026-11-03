// Hito 2 · Consultas
//
// Al menos 6 funciones:
//   - filtrar por un criterio
//   - buscar por id
//   - ordenar por dos criterios
//   - comprobar una condición (some o every)
//   - totalizar con reduce
//   - obtener una lista sin repetidos
// Ninguna modifica las listas originales.
// Para leer un dato de una fila, usa tus constantes: libro[L_TITULO], no libro[1].
//
// Hito 3 · Map, Set y funciones avanzadas (también aquí)
//   - un índice Map id → fila que usen tus búsquedas
//   - una agrupación por categoría en un Map
//   - un Set de valores únicos
//   - un closure (por ejemplo, un generador de id)
//   - una función propia que reciba otra función como parámetro
//
/**
 * Convierte un importe de texto en número
 * @param {string} texto - importe que queremos convertir
 * @returns {number} el importe convertido en número
 */
function aNumero(texto) {
    const limpio = String(texto).trim().replace(",", ".");
    const numero = Number(limpio);

    if (limpio === "" || Number.isNaN(numero)) {
        throw new Error("Importe no válido");
    }

    return numero;
}

/**
 * Busca una actividad por su id
 * @param {number} id - id de la actividad que buscamos
 * @returns {Array|undefined} la actividad encontrada o undefined
 */
function buscarActividad(id) {
    return actividades.find(actividad => actividad[A_ID] === id);
}

/**
 * Filtra las actividades por tipo.
 * @param {string} tipo - tipo de actividad que buscamos
 * @returns {Array} lista de actividades del tipo indicado
 */
function filtrarActividades(tipo) {
    return actividades.filter(actividad => actividad[A_TIPO] === tipo);
}

/**
 * Ordena las actividades por tipo y nombre.
 * @returns {Array} lista de actividades ordenadas
 */
function actividadesOrdenadas() {
    return [...actividades].sort((a, b) => a[A_TIPO].localeCompare(b[A_TIPO]) ||a[A_NOMBRE].localeCompare(b[A_NOMBRE])
    );
}

/**
 * Comprueba si existe alguna actividad con un mínimo de plazas
 * @param {number} minimo - número mínimo de plazas
 * @returns {boolean} true si existe alguna actividad, false si no
 */
function hayActividadesConPlazas(minimo) {
    return actividades.some(actividad => actividad[A_PLAZAS] >= minimo);
}

/**
 * Calcula el total de las cuotas de las inscripciones
 * @returns {number} suma total de las cuotas
 */
function totalCuotas() {
    const total = inscripciones.reduce(
        (acumulado, inscripcion) => acumulado + aNumero(buscarActividad(inscripcion[I_ACTIVIDAD])[A_CUOTA]), 0
    );

    return Math.round(total * 100) / 100;
}

/**
 * Obtiene los tipos de actividades sin repetir
 * @returns {Array} lista de tipos únicos ordenados
 */
function tiposUnicos() {
    const tipos = [];

    for (let i = 0; i < actividades.length; i++) {
        const tipo = actividades[i][A_TIPO];
        let encontrado = false;

        for (let j = 0; j < tipos.length; j++) {
            if (tipos[j] === tipo) {
                encontrado = true;
            }
        }

        if (tipo !== "" && encontrado === false) {
            tipos.push(tipo);
        }
    }

    return tipos.sort();
}

