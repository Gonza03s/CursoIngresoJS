/*
Gonzalo Suarez
Div E
Ejercicio 9 E/S

Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	//declaro variables
	let sueldo;
	let aumento;
	let sueldoAumentado;

	//tomo los valores
	sueldo = document.getElementById("txtIdSueldo").value;

	//de texto a numerica
	sueldo = parseInt(sueldo);

	//calcular el 10% del sueldo

	aumento = (10 / 100) * sueldo;
	sueldoAumentado = sueldo + aumento;

	//mostrar por pantalla
	document.getElementById("txtIdResultado").value = sueldoAumentado;
	alert("su sueldo es: " + sueldo + " su aumento es de: " + aumento + " y su sueldo aumentado es: " + sueldoAumentado);
	
}
