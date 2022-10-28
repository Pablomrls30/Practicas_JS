/* Ciclos */
for (let i=1; i<=100; i++){
    console.log(i)
}

/* for (let i=1; i<=100; i--){
    console.log(i)
}
 */

/* Escribir un programa en javascript que permita calcular el total a pagar de un empleado
Solicitar el número de horas trabajdas y el pago por hora. Pagar las horas extra al triple. Se consideran
las primeras 40 hrs como normales */

let num_horas = Math.trunc(prompt('¿Cuántas horas trabajas?'));
let pago_x_hora = 20
let pago_x_hora_extra = (pago_x_hora * 3)
let horas_extra = (num_horas - 40)
if (num_horas <= 40){
    document.write(`Tu paga es de: ${num_horas * pago_x_hora}`)
}
else{
    document.write(`Tu paga es de: ${(num_horas * pago_x_hora - 20) + (horas_extra * pago_x_hora_extra)}`)
}

/* 608 + 45.6 */