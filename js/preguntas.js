var preguntas=[
	"¿Quién pintó Las meninas?",
	"¿Cuál es la capital de Hungría?",
	"Aproximadamente, ¿cuántos huesos tiene el cuerpo humano?",
	"En el mesencéfalo se ubican:",
	"Si P = M+N, ¿cuál de las siguientes fórmulas es correcta?"
	];
var respuestas=[
	["Francisco de Goya","Diego Velázquez","Salvador Dalí","Pablo Picasso"],
	["Viena","Praga","Budapest","Estambul"],
	["40","390","208","12"],
	["Colículos superiores e inferiores","El cuarto ventrículo","Deriva de la vesícula terciaria","Las pirámides bulbares"],
	["M = P + N","N = P + M","M = P – N","N = P / M"]
	];
var indice_respuesta_correcta;
function juego() {	
var posiciones=[0,1,2,3];
var respuestas_reordenadas=[];
var indice_aleatorio=Math.floor(Math.random()*preguntas.length);
var respuestas_posibles=respuestas[indice_aleatorio];	
var txt_respuestas="";
var dato_repetido=false;
for(i in respuestas_posibles){
	var posicion_aleatoria=Math.floor(Math.random()*posiciones.length);
	if(posicion_aleatoria==0 && dato_repetido==false){
		indice_respuesta_correcta=i;
		dato_repetido=true;
	}
	respuestas_reordenadas[i]=respuestas_posibles[posiciones[posicion_aleatoria]];
	posiciones.splice(posicion_aleatoria,1);
}
for(i in respuestas_reordenadas){
	txt_respuestas+='<input type="radio" name="pp" value"'+i+'"><label>'+respuestas_reordenadas[i]+'</label><br>';
}

document.getElementById("pregunta").innerHTML=preguntas[indice_aleatorio];
document.getElementById("respuesta").innerHTML=txt_respuestas;

}

function comprobacion() {
	var respuesta= $("input[type=radio]:checked").val;
	if (respuesta==indice_respuesta_correcta) {
		alert("Wooow acertaste");
	}//fin if
	else{
		alert("No es que hayas perdido, solamente no ganaste");
	}//fin else
}