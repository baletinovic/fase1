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
    igual(totalCuotas(), 343.75);
});


prueba("tiposUnicos devuelve los tipos sin repetir y ordenados", () => {
    igual(tiposUnicos(), ["acuática", "competición", "raqueta", "salud"]);
});
