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
 * el codigo de HITO 2:
 * Busca una actividad por su id
 * @param {number} id - id de la actividad que buscamos
 * @returns {Array|undefined} la actividad encontrada o undefined
function buscarActividad(id) {
    return actividades.find(actividad => actividad[A_ID] === id);
}
*/

/**
 * Crea un índice Map utilizando los id de las filas
 * @param {Array[]} lista - lista que queremos indexar
 * @param {number} posId - posicion del id
 * @returns {Map} indice que relaciona cada id con su fila
 */
function crearIndice(lista, posId) {
    return new Map(lista.map((fila) => [fila[posId], fila]));
}

const indiceActividades = crearIndice(actividades, A_ID);

const indiceSocios = crearIndice(socios, S_ID);

/**
 * Busca una actividad por su id utilizando Map
 * @param {number} id - id de la actividad
 * @returns {Array|undefined} la actividad encontrada
 */
function buscarActividad(id) {
    return indiceActividades.get(id);
}

/**
 * Busca un socio por su id utilizando Map
 * @param {number} id - id del socio
 * @returns {Array|undefined} el socio encontrado
 */
function buscarSocio(id) {
    return indiceSocios.get(id);
}

/**
 * Agrupa los nombres de las actividades por tipo utilizando Map
 * @returns {Map} mapa con cada tipo y sus actividades
 */
function agruparActividadesPorTipo() {
    const grupos = actividades.reduce((grupos, actividad) => {
        const tipo = actividad[A_TIPO];

        if (grupos.has(tipo) === false) {
            grupos.set(tipo, []);
        }

        grupos.get(tipo).push(actividad[A_NOMBRE]);

        return grupos;
    }, 
    new Map());
    return grupos;
}

/**
 * Obtiene los tipos de actividades sin repetir utilizando Set
 * @returns {Set} conjunto de tipos únicos
 */
function tiposConSet() {
    const tipos = new Set();

    for (let i = 0; i < actividades.length; i++) {
        tipos.add(actividades[i][A_TIPO]);
    }

    return tipos;
}


/**
 * Filtra una lista utilizando una condición recibida
 * @param {Array[]} lista - lista que queremos filtrar
 * @param {Function} condicion - funcion que comprueba cada fila
 * @returns {Array[]} lista con los elementos que cumplen la condición
 */
function filtrarPor(lista, condicion) {
    return lista.filter(condicion);
}

/**
 * Crea una función que genera nuevos id consecutivos
 * @param {number} ultimo - ultimo id utilizado
 * @returns {Function} funcion que genera el siguiente id
 */
function crearGeneradorId(ultimo) {
    let actual = ultimo;

    return () => {
        actual++;
        return actual;
    };
}



/**
 *  el codigo de HITO 2:
 * Filtra las actividades por tipo.
 * @param {string} tipo - tipo de actividad que buscamos
 * @returns {Array[]} lista de actividades del tipo indicado
function filtrarActividades(tipo) {
    return actividades.filter(actividad => actividad[A_TIPO] === tipo);
}
 */

/**
 * Filtra las actividades por tipo
 * @param {string} tipo - tipo de actividad que buscamos
 * @returns {Array[]} lista de actividades del tipo indicado
 */
function filtrarActividades(tipo) {
    return filtrarPor(actividades, actividad => actividad[A_TIPO] === tipo);
}

/**
 * Ordena las actividades por tipo y nombre.
 * @returns {Array[]} lista de actividades ordenadas
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
 * @returns {Array[]} lista de tipos únicos ordenados
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

