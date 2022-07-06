/*
Gonzalo Suarez
Div E
Ejercicio 10 E/S


Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	//variables
	let importe;
	let descuento;
	let resultado;

	//tomar los datos por id
	importe = document.getElementById("txtIdImporte").value; 

	//texto a numerica
	importe = parseInt(importe);

	//operacion
	
	descuento = importe * 25 / 100;
	
	// se resta el importe menos el descuento, asi se muestra el resultado

	resultado = importe - descuento;

	//se muestran los datos por pantalla

	document.getElementById("txtIdResultado").value = resultado; 

	//alert concatenando variables
	alert("su monto ingresado es: " + importe + " su descuento es de: " + descuento + " y su resultado es: " + resultado);


	
	/* el calculo de porcentaje de un valor, lo consigo multiplicando el valor por el porcentaje y lo divido por 100
		25/100 da decimal, ese decimal se multiplica por el importe q de el usuario y ahi da el porcentaje*/

}
