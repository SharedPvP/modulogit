/*var x = 0;

while(x < 10){
	document.write("Numero: " + x + "</br>");
	x ++;
}

document.write("Finalizando o loop...");


for (x = 0; x < 10; x++) {
	document.write("Numero: " + x +"</br>");
}
*/

function verificar(){
	var n1 = document.getElementById("n1").innerHTML;
	var n2 = document.getElementById("n2").value;
	if(n1 == n2){
		alert("Parabens, você acertou!!");
	}else{
			alert("Infelizmente você errou :/");
	}
	resetar();
}
function resetar(){
	document.getElementById("n2").value = "";

	var r = Math.floor(Math.random() *100);
	document.getElementById("n1").innerHTML = r;
}