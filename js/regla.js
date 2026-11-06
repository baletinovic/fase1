// Hito 4 · Regla personal y altas/bajas
//
// Mi regla personal (cópiala de tu ficha):
// Precio o importe escalonado

// Descuento familiar en la cuota: el segundo socio de una familia paga un 15 % menos y el tercero y siguientes, un 25 % menos. 
// cuotaFamiliar(cuotaBase, posicion) devuelve lo que paga cada uno.


// Aquí van también las altas y bajas en memoria. Validan los datos
// y lanzan errores con throw, por ejemplo:
//   throw new Error("Socio no encontrado");

/**
 * Calcula la cuota mensual según la posición del socio en la familia
 * @param {number} cuotaBase - precio original de la cuota
 * @param {number} posicion - posicion del socio en la familia
 * @returns {number} precio final con el descuento aplicado
 */
function cuotaFamiliar(cuotaBase, posicion) {
    let cuotaFinal = cuotaBase;

    if (posicion === 2) {
        cuotaFinal = cuotaBase * 0.85;
    }

    if (posicion >= 3) {
        cuotaFinal = cuotaBase * 0.75;
    }

    return Math.round(cuotaFinal * 100) / 100;
}

/**
 * Añade una nueva inscripción al club deportivo
 * @param {Array[]} listaInscripciones - lista actual de inscripciones
 * @param {number} idSocio - id del socio
 * @param {number} idActividad - id de la actividad
 * @param {number} dia - día de la inscripción
 * @param {Function} generarId - función que genera el siguiente id
 * @returns {Array[]} nueva lista con la inscripción añadida
 */
function inscribir(listaInscripciones, idSocio, idActividad, dia, generarId) {

    if (buscarSocio(idSocio) === undefined) {
        throw new Error("Socio no encontrado");
    }

    if (buscarActividad(idActividad) === undefined) {
        throw new Error("Actividad no encontrada");
    }

    if (!Number.isInteger(dia) || dia < 1 || dia > 60) {
        throw new Error("Día no válido");
    }

    const nuevaInscripcion = [
        generarId(),
        idSocio,
        idActividad,
        dia,
        false
    ];

    return [...listaInscripciones, nuevaInscripcion];
}

/**
 * Elimina una inscripción por su id
 * @param {Array[]} listaInscripciones - lista actual de inscripciones
 * @param {number} id - id de la inscripción que queremos eliminar
 * @returns {Array[]} nueva lista sin la inscripción eliminada
 */
function borrarInscripcion(listaInscripciones, id) {
    const existe = listaInscripciones.some(inscripcion => inscripcion[I_ID] === id);

    if (existe === false) {
        throw new Error("Inscripción no encontrada");
    }

    return listaInscripciones.filter(inscripcion => inscripcion[I_ID] !== id);
}