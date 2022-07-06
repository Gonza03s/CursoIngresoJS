/*
Gonzalo Suarez
Div E
Ejercicio 5 E/S

Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	//creamos variables
	let nombreIngresado;
	let edadIngresada;

	//tomamos datos por id
	//donde guardo     que guardo
	nombreIngresado = document.getElementById("txtIdNombre").value;
	edadIngresada = document.getElementById("txtIdEdad").value;

	//mostrar los datos
	alert("Su nombre es: " + nombreIngresado + " y su edad es: " + edadIngresada + " años.");

	// cada vez que querramos concatenar una variable con un mensaje
	// usamos el simbolo +

}


/* 
cuando tomo datos primero va la variable del lado izq y dsps getelementbyid del lado derecho
nombreIngresado = document.getElementById("txtIdNombre").value;

al  mostrar datos id, es al reves	
								    nombre de la variable	
document.getElementById("id").value = variable

operadores aritmeticos

+ - * / %

operadores relacionales o de comparacion

> < == >= <=

operadores logicos
!(negacion) &&(Y o and) || (o - or)

*/
