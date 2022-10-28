/* Ejemplo arreglo */
let equipos = ['tigres', 'rayados','américa'];
console.log('Tipo de dato',
typeof equipos)

console.log('datos', equipos);

console.log('total equipos', 
            equipos.length);


console.log('Primer equipo',
            equipos[0]);

console.log('último equipo',
            equipos[equipos.length-1])

equipos.push('necaxa');

console.log(equipos);

console.log('último', equipos.pop());
console.log(equipos)


/* Definir un objeto */
let materias = ['Web','Conta','Costos'];
let grupo52 = {
    'nombre' : 'grupo 52',
    'semestre' : 5,
    'carrera' : 'LTI',
    'materias' : materias
};

console.log(grupo52);
console.log('nombre: ', grupo52[0]); /* Error */
console.log('nombre: ', grupo52['nombre']);
console.log('nombre: ', grupo52.nombre);
console.log('Primera materia: ',
            grupo52['materias'][0])

console.log('Primera materia: ',
            grupo52.materias[0])

grupo52.facultad = 'facpya';
console.log(grupo52);


/* let carrera = prompt('¿Cuál es tu carrera?'); */

document.write('<marquee>Hola</maruqee>');

document.write(
    `<ul>
        <li>LTI</li>
        <li>LA</li>
        <li>CP</li>
        <li>LNI</li>
    </ul>`
)

/* Sentencias Condicionales */
/* If */
let calif = 90;
if (calif >= 95 && calif <= 100){
    console.log('Excelente');
}
else{
    console.log('No excelente');
}

let num = 3;
switch(num){
    case 1:
        console.log('Uno')
    case 2:
        console.log('Dos')
    case 3:
        console.log('Tres')
    case 4:
        console.log('Cuatro')
    case 5:
        console.log('Error')
}
