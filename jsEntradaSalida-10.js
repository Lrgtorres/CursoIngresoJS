/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
/*function mostrarAumento()
{
	var importe;
	var resultado;
	var porcentaje;

    importe=txtIdImporte.value;
    importe=parseInt(importe);
    
    porcentaje= importe*25/100;

    
    resultado=importe-porcentaje; 
    txtIdResultado.value = resultado;

}*/

function mostrarAumento()
{
	var importe;
	var resultado;
	


    importe=txtIdImporte.value;
    importe=parseInt(importe);


    resultado=importe*0.75;
    txtIdResultado.value = resultado;

}