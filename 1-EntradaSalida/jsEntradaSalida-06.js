/*
Gonzalo Suarez
Div E
Ejercicio 6 E/S

Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	//variables
	let num1;
	let num2;
	let resultado;

	//tomar los datos por id- inicializamos o usamos
	num1 = document.getElementById("txtIdNumeroUno").value;
	num2 = document.getElementById("txtIdNumeroDos").value;

	//transformamos a enteros- parsearlos

	num1 = parseInt(num1);
	num2 = parseInt(num2);

	//operacion
	resultado = num1 + num2;

	//mostrar resultado
	 alert("la suma es: " +resultado);

}

