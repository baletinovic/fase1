// Pruebas de tu proyecto. Se ven al abrir pruebas.html.
//
// Funciones que tienes (están en mini-pruebas.js):
//   prueba(nombre, fn)               define una prueba
//   igual(obtenido, esperado)        números, textos, arrays, Map y Set
//   casiIgual(obtenido, esperado)    decimales (2 por defecto)
//   lanzaError(fn, mensaje)          comprueba que se lanza un error con ese mensaje

prueba("aNumero convierte importes correctamente", () => {
    igual(aNumero("25,50"), 25.5);
    igual(aNumero("30"), 30);
});

prueba("aNumero lanza un error con un importe no válido", () => {
    lanzaError(() => aNumero("hola"), "Importe no válido");
});

prueba("buscarActividad encuentra la actividad 3", () => {
    igual(buscarActividad(3)[A_NOMBRE], "Pádel iniciación");
});


prueba("filtrarActividades devuelve las actividades de salud", () => {
    igual(filtrarActividades("salud").length, 5);
});


prueba("actividadesOrdenadas ordena por tipo y nombre sin modificar la lista original", () => {
    const ordenadas = actividadesOrdenadas();

    igual(ordenadas[0][A_NOMBRE], "Aquagym");
    igual(ordenadas[1][A_NOMBRE], "Natación adultos");
    igual(ordenadas[2][A_NOMBRE], "Natación infantil");

    igual(actividades[0][A_NOMBRE], "Yoga");
});


prueba("hayActividadesConPlazas comprueba el mínimo de plazas", () => {
    igual(hayActividadesConPlazas(15), true);
    igual(hayActividadesConPlazas(25), false);
});


prueba("totalCuotas calcula correctamente la suma de las cuotas", () => {
    //igual(totalCuotas(), 343.75);
    igual(totalCuotas(inscripciones), 343.75);
});




prueba("tiposUnicos devuelve los tipos sin repetir y ordenados", () => {
    igual(tiposUnicos(), ["acuática", "competición", "raqueta", "salud"]);
});

prueba("agruparActividadesPorTipo agrupa las actividades por tipo", () => {
    const grupos = agruparActividadesPorTipo();

    igual(grupos.get("salud").length, 5);

    igual(grupos.get("salud"), ["Yoga","Preparación física","Pilates","Zumba","Escalada"]);
});



prueba("tiposUnicosSet devuelve los tipos sin repetir", () => {
    igual(tiposConSet(), new Set(["salud","acuática","raqueta","competición"]));
});


prueba("crearGeneradorId genera ids consecutivos", () => {
    const siguiente = crearGeneradorId(12);
    igual(siguiente(), 13);
    igual(siguiente(), 14);
    igual(siguiente(), 15);
});


prueba("filtrarPor filtra una lista utilizando una condición", () => {
    const resultado = filtrarPor(actividades, actividad => actividad[A_TIPO] === "salud");
    igual(resultado.length, 5);
});


prueba("cuotaFamiliar aplica el descuento del segundo socio", () => {
    igual(cuotaFamiliar(40, 2), 34);
});

prueba("cuotaFamiliar aplica el descuento del tercer socio", () => {
    igual(cuotaFamiliar(40, 3), 30);
});

prueba("cuotaFamiliar no aplica descuento al primer socio", () => {
    igual(cuotaFamiliar(40, 1), 40);
});

prueba("inscribir añade una nueva inscripción sin modificar la lista original", () => {
    const siguienteId = crearGeneradorId(inscripciones.length);

    const resultado = inscribir(inscripciones, 6, 13, 40, siguienteId);

    igual(resultado.length, 13);
    igual(resultado[resultado.length - 1], [13, 6, 13, 40, false]);
    igual(inscripciones.length, 12);
});

prueba("borrarInscripcion elimina una inscripción sin modificar la lista original", () => {
    const resultado = borrarInscripcion(inscripciones, 12);

    igual(resultado.length, 11);
    igual(inscripciones.length, 12);
});

prueba("borrarInscripcion da error si la inscripción no existe", () => {
    lanzaError(() => borrarInscripcion(inscripciones, 99), "Inscripción no encontrada");
});

prueba("inscribir da error si el socio no existe", () => {
    lanzaError(
        () => inscribir(inscripciones, 99, 13, 40, crearGeneradorId(12)),
        "Socio no encontrado"
    );
});

prueba("inscribir da error si la actividad no existe", () => {
    lanzaError(
        () => inscribir(inscripciones, 6, 99, 40, crearGeneradorId(12)),
        "Actividad no encontrada"
    );
});

prueba("inscribir da error si el día no es válido", () => {
    lanzaError(
        () => inscribir(inscripciones, 6, 13, 61, crearGeneradorId(12)),
        "Día no válido"
    );
});

prueba("inscribir no consume un ID si la operación falla", () => {
    const siguienteId = crearGeneradorId(12);

    lanzaError(
        () => inscribir(inscripciones, 99, 13, 40, siguienteId),
        "Socio no encontrado"
    );

    igual(siguienteId(), 13);
});