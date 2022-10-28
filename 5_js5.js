/* Práctica Calculadora (Se ejecuta en el documento)*/
function calcula(operacion){
    var operando1 = document.calc.operando1.value
    var operando2 = document.calc.operando2.value 
    var result = eval(operando1 + operacion + operando2)
    document.calc.resultado.value = result
}


/* Práctica tablas de multiplicar (Se ejecuta en la consola) */
let numero = 4
let termina = 7
for(let i = 1; i <= termina; i ++){
    console.log(`${numero}  X  ${i} = ${numero * i}`)
}