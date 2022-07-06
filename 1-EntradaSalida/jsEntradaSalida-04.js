/* 
Gonzalo Suarez
Div E
Ejercicio 4 E/S

Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
    //donde guardo -  que guardo
	let nombre = prompt("Cual es tu nombre?");

	//mostrar datos
	 document.getElementById("txtIdNombre").value = nombre;




	
	
	/*
	- acceder al valor de una caja de texto:
	document.getElementById("id").value
	
	-pedirle un dato al usuario:

	- prompt("Cual es tu nombre?");

	- mostrarle un dato al usuario:
	 alert(variable)
	*/
}

