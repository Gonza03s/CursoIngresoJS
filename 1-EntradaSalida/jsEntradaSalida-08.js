/*
Gonzalo Suarez
Div E
Ejercicio 8 E/S

Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	//declaro las variables y tomo los valores por id
	let num1 = document.getElementById("txtIdNumeroDividendo").value;
	let num2 = document.getElementById("txtIdNumeroDivisor").value;
	let resultado;

	//se pasa de texto a numerica
	num1 = parseInt(num1);
	num2 = parseInt(num2);

	//se realiza la operacion
	resultado = num1 % num2;

	//se muestra por pantalla concatenado con la variable resultado
	alert("el resultado de tu operacion es: " + resultado);



}
