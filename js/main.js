// Menú del programa. Se ejecuta al abrir index.html.
//
// Hito 1: muestra aquí tus tres arrays con console.table.
//console.table(actividades);
//console.table(socios);
//console.table(inscripciones);
//
// Hito 4: convierte este fichero en un menú que
//   - pide la opción con prompt
//   - muestra los resultados con console.table o alert
//   - pide confirmación con confirm antes de borrar
//   - captura los errores con try…catch y los muestra sin que el programa se rompa
//   - resiste que el usuario cancele, deje la entrada vacía o escriba una opción que no existe

/**
 * Pide un número entero al usuario.
 * @param {string} mensaje - mensaje que aparece en prompt
 * @returns {number|null} numero introducido o null si cancela
 */
function pedirNumero(mensaje) {
    const texto = prompt(mensaje);

    if (texto === null) {
        return null;
    }

    const numero = Number(texto.trim());

    if (texto.trim() === "" || Number.isNaN(numero) || !Number.isInteger(numero)) {
        throw new Error("Debes introducir un número entero");
    }

    return numero;
}


/**
 * Muestra el menú principal del club deportivo y permite gestionar las inscripciones
 * @returns {void}
 */
function menu()
 {
    let inscripcionesActuales = [...inscripciones];
    const siguienteId = crearGeneradorId(inscripciones.length);
    let seguir = true;

    while (seguir) {
        const opcion = prompt(
            "MENÚ PRINCIPAL\n\n" +
            "1. Ver datos\n" +
            "2. Buscar actividad\n" +
            "3. Buscar socio\n" +
            "4. Consultar actividades\n" +
            "5. Calcular cuotas\n" +
            "6. Inscribir socio\n" +
            "7. Borrar inscripción\n" +
            "0. Salir"
        );

        if (opcion === null || opcion.trim() === "0") {
            seguir = false;
            continue;
        }

        try {
            switch (opcion.trim()) {

                case "1":
                    console.table(actividades);
                    console.table(socios);
                    console.table(inscripcionesActuales);
                    break;

                case "2": {
                    const id = pedirNumero("Introduce el ID de la actividad:");
                    if (id === null) break;

                    const actividad = buscarActividad(id);

                    if (actividad === undefined) {
                        alert("Actividad no encontrada");
                    } else {
                        console.table([actividad]);
                    }
                    break;
                }

                case "3": {
                    const id = pedirNumero("Introduce el ID del socio:");
                    if (id === null) break;

                    const socio = buscarSocio(id);

                    if (socio === undefined) {
                        alert("Socio no encontrado");
                    } else {
                        console.table([socio]);
                    }
                    break;
                }

                case "4": {
                    const tipo = prompt("Introduce el tipo de actividad que quieres buscar:");
                    if (tipo === null) break;

                    if (tipo.trim() === "") {
                        throw new Error("Debes introducir un tipo de actividad");
                    }

                    const minimo = pedirNumero("Número mínimo de plazas:");
                    if (minimo === null) break;

                    console.log("Actividades filtradas:");
                    console.table(filtrarActividades(tipo.trim()));

                    console.log("Actividades ordenadas:");
                    console.table(actividadesOrdenadas());

                    alert("¿Hay actividades con al menos " + minimo +
                        " plazas? " + hayActividadesConPlazas(minimo));

                    console.log("Tipos sin repetir:");
                    console.table(tiposUnicos());

                    console.log("Actividades agrupadas por tipo (Map):");
                    console.log(agruparActividadesPorTipo());

                    console.log("Tipos únicos (Set):");
                    console.log(tiposUnicosSet());

                    alert("Las consultas se han mostrado en la consola (F12)");
                    break;
                }

                case "5": {
                    const total = totalCuotas(inscripcionesActuales);

                    alert("Total de cuotas: " + total.toFixed(2) + " €");

                    const textoCuota = prompt("Introduce la cuota base:");
                    if (textoCuota === null) break;

                    const cuota = aNumero(textoCuota);

                    const posicion = pedirNumero("Posición del socio en la familia:");
                    if (posicion === null) break;

                    if (posicion < 1) {
                        throw new Error("Posición no válida");
                    }

                    alert("Cuota familiar: " +
                        cuotaFamiliar(cuota, posicion).toFixed(2) + " €");
                    break;
                }

                case "6": {
                    const idSocio = pedirNumero("ID del socio:");
                    if (idSocio === null) break;

                    const idActividad = pedirNumero("ID de la actividad:");
                    if (idActividad === null) break;

                    const dia = pedirNumero("Día de inscripción (1-60):");
                    if (dia === null) break;

                    inscripcionesActuales = inscribir(
                        inscripcionesActuales,
                        idSocio,
                        idActividad,
                        dia,
                        siguienteId
                    );

                    alert("Inscripción añadida correctamente");
                    break;
                }

                case "7": {
                    const id = pedirNumero("ID de la inscripción:");
                    if (id === null) break;

                    if (confirm("¿Seguro que quieres borrar esta inscripción?")) {
                        inscripcionesActuales = borrarInscripcion(
                            inscripcionesActuales,
                            id
                        );

                        alert("Inscripción eliminada correctamente");
                    }
                    break;
                }

                default:
                    alert("Opción no válida");
            }

        } catch (error) {
            alert("Error: " + error.message);
        }
    }
}

menu();

