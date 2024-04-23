// Esto muestra el numero diez en consola que no cambiara
const miNumero = 10
console.log(miNumero)
// Esto enseñara el largo de un string que no cambiara
const myString = "Esto es una cadena"
console.log(myString.length)
// Esto muestra un array en JS
const myArray = ["hola",3,[1,2,3]]
console.log(myArray)
// Esto es un objeto en js
const miObjeto= {
    name : "carlos",
    value : 300,
    state : true
}
console.log(miObjeto)
// Esto pide un nombre al usuario
nombreUsuario = prompt("Ingresa tu nombre")
alert(nombreUsuario)
// Esto pide una confirmacion y acorde a la respuesta imprime un mensaje en consola
let confirmacion = confirm("Te gusta JavaScript?")
if (confirm){
    console.log("GENIAL!!")
}
else {console.log("Que triste :/")}
console.warn("Esto solo es una practica papito :V")
console.error("error 404 not found your brain :V")
console.table([1,2,3,4,5])