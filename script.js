/*function validar(){
	var x = document.getElementsByName('formulario').values();
var nome = formulario.value;
var telefone = formulario.txtTel.value;

if(x ==  ""){
	alert("Preencha o campo do Nome!");
	return false;
}

if(telefone ==  ""){
	alert("Preencha o campo do Telefone!");
	return false;
}
	
}
*/

function verifica(){
    var v = document.getElementsById("batata").values();
    if(v == ""){
    	alert("Preencha todos os campos!")
    	return false;
    }
    return true;
}

