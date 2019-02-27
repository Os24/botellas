var botellas = [1,2,3]
var totalOrigen = "";
var cantidadBoteUno = "";
var cantidadBoteDos = "";
var cantidadBoteTres = "";
var cantidadBoteCinco = "";
var totalOrigen = "";

function botellasCalc(){
	totalOrigen = $("#input-total").val();
	let totalCompare = totalOrigen/botellas[2];
    if (totalOrigen % botellas[2]!=0) {
    	let litrosRes = totalOrigen % botellas[2]
    	cantidadBoteUno = Math.trunc(totalOrigen/botellas[2])
    	if (litrosRes!=0) {
    		let temp = litrosRes/botellas[1]
    		if (litrosRes % botellas[1]===0) {
    			cantidadBoteDos = Math.trunc(temp)
    			$("#botellas-display").html("botellas de 3 litros:  "+ cantidadBoteUno+ "<br>botellas de 2 litros:"+ cantidadBoteDos)
    		}else 

    		if (litrosRes % botellas[1]!=0) {
    			cantidadBoteDos = Math.trunc(temp)
    			temp =  litrosRes/botellas[0]

    			if (litrosRes % botellas[0]===0) {
    				cantidadBoteTres = Math.trunc(temp)
    				$("#botellas-display").html("botellas de 3 litros:  "+ cantidadBoteUno+ "<br>botellas de 2 litros:"+ cantidadBoteDos+ "<br>botellas de 1 litro:"+ cantidadBoteTres)
    			}

    		}

    	}

	}
}






