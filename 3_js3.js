/* Práctica de Medicamentos*/
let hora = 1
let fr = 7
for(let x = 1; x<=fr; ++x){
  document.write(`Toma #${x}: ${hora}`)
  hora += fr
  if(hora >= 24){
    hora -= 24
  }
  document.write("<br>")
  
}

/* Práctica números perfectos*/
let numero = 7
let suma = 0
for(let i = 1; i<=numero / 2; ++i){
  if (numero % i == 0){
    suma += i;
  }
}

if(suma != 0 && suma == numero){
  console.log(`El número ${numero} es perfecto`)
} else{
  console.log(`El número ${numero} no es perfecto`)
}