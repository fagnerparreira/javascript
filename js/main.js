

function clicou(){
    document.getElementById("agradecimento").innerHTML = " Obrigado por clicar";
 
 
    // alert("Obrigado por ter clicado")
}


function redirecionar() {
    window.open("https://web.digitalinnovation.one/home")
    //window.location.href = "https://web.digitalinnovation.one/home";
}

function trocar(elemento) {
    //document.getElementById("mousemove").innerHTML ="Obrigado por passar o mouse";
   elemento.innerHTML = "Obrigado por passar o mouse";
   
    // alert("trocar texto");

}


function voltar (elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "passe o mouse aqui";

}


function load(){
    alert("pagina carregada");
}


function funcaoChange(elemento){
    console.log(elemnto.value)

}




/*
function soma(n1, n2){
        return n1 + n2;
}


var validar = 0;

function validaIdade(idade){
    if (idade >=18){
        validar = true
    }else {
        validar = true
    }
    return validar;
}

var idade = prompt("Qual sua idade");
validaIdade(idade)
console.log(validar);

*/






/*function setReplace(frase, nome, nome_nome){
    return frase.replace(nome, nome_nome)
}

alert(soma(5,10));
alert(setReplace("Vai Japão", "Japão", "Brasil"));
*/
/*var d = new Date();
alert (d.getDay()+1);
*/
//alert (d);



/*var count;
for(count=0; count <=5; count++){
    alert(count);
}

*/

/*var count = 0;
while (count <= 5);{
    console.log(count); 
    alert(count);
    count++;
    
};
não funcionou
*/



/*
var idade = prompt ("Qual sua idade");
if  (idade >= 18){
    alert(" maior de idade");
}else {
    alert("menor de idade");
};

*/



/*var frutas = [{ nome: "maça", cor: "vermelha"}, { nome: "uva", cor: "roxa"}];
console.log(frutas);
alert(frutas[0].nome);
*/

/*var fruta = { nome: "maça", cor: "vermelha"};
console.log(fruta.nome);
alert(fruta.cor);
*/



//var lista = ["maça", "pêra", "laranja"];
//lista.push("uva");
//lista.pop()
//console.log(lista.reverse());

//console.log(lista);
//console.log(lista.toString()[0]);
//console.log(lista.join("    "));
//alert(lista[1]);












//var nome = "Fagner Parreira";
//var n1 = 5;
//var n2 = 4;
//var frase = "Sou estudante de js"
//alert(nome + " tem " + idade + " anos");
//alert(idade +idade2);
//console.log(nome)
//console.log(n1 * n2);
//console.log(frase.toLocaleUpperCase());
