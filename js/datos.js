// Hito 1 · Datos


//actividades
const A_ID = 0, A_NOMBRE = 1, A_MONITOR = 2,A_TIPO = 3, A_PLAZAS = 4, A_CUOTA = 5;

const actividades = [
    [1, "Yoga", "Elena Ruiz", "salud", 12, "25,50"],
    [2, "Natación infantil", "Raúl Peña", "acuática", 8, "30"],
    [3, "Pádel iniciación", "", "raqueta", 4, "35"],
    [4, "Aquagym", "Raúl Peña", "acuática", 10, "28,75"],
    [5, "Tenis", "Sofía Láinez", "raqueta", 6, "32"],
    [6, "Preparación física", "Marcos Díaz", "salud", 15, "20"],
    [7, "Baloncesto", "Iván Núñez", "competición", 12, "40"],
    [8, "Fútbol sala", "Sergio Pérez", "competición", 10, "35"],
    [9, "Pilates", "Laura Gómez", "salud", 10, "22,50"],
    [10, "Natación adultos", "Raúl Peña", "acuática", 12, "30"],
    [11, "Voleibol", "Ana Martín", "competición", 14, "27"],
    [12, "Bádminton", "Elena Ruiz", "raqueta", 8, "18"],
    [13, "Atletismo", "Carlos Muñoz", "competición", 16, "25"],
    [14, "Zumba", "María López", "salud", 20, "15"],
    [15, "Escalada", "Diego Sánchez", "salud", 6, "33"]
];


// socios
const S_ID = 0, S_NOMBRE = 1, S_TELEFONO = 2;

const socios = [
    [1, "Marta Gómez", "622333444"],
    [2, "Iván Núñez", ""],
    [3, "José Pérez", "633444555"],
    [4, "Lucía Fernández", "644555666"],
    [5, "Álvaro Muñoz", "655666777"],
    [6, "Sofía Rodríguez", "666777888"]
];


// inscripciones
const I_ID = 0, I_SOCIO = 1, I_ACTIVIDAD = 2, I_DIA = 3, I_PAGADA = 4;

const inscripciones = [
    [1, 1, 3, 2, true],
    [2, 1, 1, 4, true],
    [3, 2, 2, 5, false],
    [4, 1, 4, 7, false],
    [5, 3, 5, 9, true],
    [6, 4, 6, 12, false],
    [7, 2, 7, 15, true],
    [8, 5, 8, 18, false],
    [9, 3, 9, 22, true],
    [10, 4, 10, 25, true],
    [11, 5, 11, 30, false],
    [12, 1, 12, 35, true]
];