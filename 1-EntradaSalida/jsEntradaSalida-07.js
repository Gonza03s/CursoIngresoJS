/*
Gonzalo Suarez
Div E
Ejercicio 7 E/S

Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let num1;
	let num2;
	let resultado1;

	num1 = document.getElementById("txtIdNumeroUno").value;
	num2 = document.getElementById("txtIdNumeroDos").value;

	num1 = parseInt(num1);
	num2 = parseInt(num2);

	resultado1 = num1 + num2;
	alert("el resultado de tu operacion es: " + resultado1);
	
}

function restar()
{
	//declaracion de las variables
	let numero1;
	let numero2;
	let resultado2;
	
	//se toman los datos por id
	numero1 = document.getElementById("txtIdNumeroUno").value;
	numero2 = document.getElementById("txtIdNumeroDos").value;
	// se transforma de texto a numerica
	numero1 = parseInt(numero1);
	numero2 = parseInt(numero2);
	// se realiza la operacion
	resultado2 = numero1 - numero2;
	// salida de datos, se muestra el resultado en pantalla
	alert("el resultado de tu operacion es: " + resultado2);

}

function multiplicar()
{ 
	let numero3;
	let numero4;
	let resultado3;

	numero3 = document.getElementById("txtIdNumeroUno").value;
	numero4 = document.getElementById("txtIdNumeroDos").value;

	numero3 = parseInt (numero3);
	numero4 = parseInt (numero4);

	resultado3 = numero3 * numero4;
	alert("el resultado de tu operacion es: " + resultado3);

}

function dividir()
{

	let numero5;
	let numero6;
	let resultado4;

	numero5 = document.getElementById("txtIdNumeroUno").value;
	numero6 = document.getElementById("txtIdNumeroDos").value;
	
	numero5 = parseInt(numero5);
	numero6 = parseInt(numero6);

	resultado4 = numero5 / numero6;

	alert("el resultado de tu operacion es: " + resultado4);

}

