//VARIÁVEIS
	//USUARIOS E SENHA
		var password = '123'
 		var login = 'usuario@gmail.com'
		var inpEmail = window.document.getElementById('email-user')
		var inpSenha = window.document.getElementById('password-user')
		var mostrarSenha = window.document.getElementById('S-visivel')
	//VARIAVEIS REGISTRAR
		var mostrarSenhaReg = window.document.getElementById('S-visivel-user')
		var inptSenhaReg = window.document.getElementById('senha-reg')
		var inptSenhaConfirReg = window.document.getElementById('senha-confirme-reg')
	//TORNAR CAIXA VISIVEL
		var log = window.document.getElementById('inpt-for-login')
		var caixalogin = window.document.getElementById('login')
		var reg = window.document.getElementById('inpt-for-registro')
		var caixaregistrar = window.document.getElementById('registro')
		caixalogin.style.display = 'none'
		caixaregistrar.style.display = 'none'
// log reg borda alternar 


	
//CHECKBOX PARA MOSTRAR SENHA
 mostrarSenha.addEventListener('click', function() {
	if (inpSenha.getAttribute('type') == 'password') {
		inpSenha.setAttribute('type', 'text')

	}else {
		inpSenha.setAttribute('type', 'password')
	}
	
 })

 //CHECKBOX PARA MOSTRAR SENHA do registro
 mostrarSenhaReg.addEventListener('click', function() {
	if (inptSenhaReg.getAttribute('type') == 'password') {
		inptSenhaReg.setAttribute('type', 'text')
		inptSenhaConfirReg.setAttribute('type', 'text')

	}else {
		inptSenhaReg.setAttribute('type', 'password')
		inptSenhaConfirReg.setAttribute('type', 'password')
	}
	
 })


//MOSTRAR CAIXA DE LOGIN OU DE REGISTRO
 log.addEventListener('click', function(){
 	if (caixalogin.style.display == 'none' && caixaregistrar.style.display == 'none') {
 		caixalogin.style.display = 'flex'
 	} else if (caixalogin.style.display == 'none' && caixaregistrar.style.display == 'flex') {
 		caixalogin.style.display = 'flex'
 		caixaregistrar.style.display = 'none'
 	}else if (caixalogin.style.display == 'flex') {
 		caixalogin.style.display = 'none'
 	}
 	
 })

 reg.addEventListener('click', function(){
 	if (caixaregistrar.style.display == 'none' && caixalogin.style.display == 'none') {
 		caixaregistrar.style.display = 'flex'
 	} else if (caixaregistrar.style.display == 'none' && caixalogin.style.display == 'flex') {
 		caixaregistrar.style.display = 'flex'
 		caixalogin.style.display = 'none'}

 	else if (caixaregistrar.style.display == 'flex') {
 		caixaregistrar.style.display = 'none'}
 	
 })

function logar() {
	var email = inpEmail.value
	var senha = inpSenha.value
	if (senha === password && email == login) {
		alert('BOA JOGADOR')
	}else {
	}
 }

//VARIAVEIS REGISTRAR
	var emailReg = window.document.getElementById('email-reg')
	var telReg = window.document.getElementById('tel-reg')
	var nascReg = window.document.getElementById('nasc-reg')
	var senhaReg = window.document.getElementById('senha-user')
	var confirSenhaReg = window.document.getElementById('confir-senha')


//MASCARA DE TELEFONE (xx) xxxxx-xxxx

	function mascara(o,f) {
		v_obj=o
	    v_fun=f
		setTimeout("exmascara()",1)
	 }

	function exmascara() {
		v_obj.value=v_fun(v_obj.value)
	 }

	function mtel(v) {
		v=v.replace(/\D/g,""); //Remove tudo o que não é dígito
	    v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
	    v=v.replace(/(\d)(\d{4})$/,"$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
	    return v;
	 }

	function id( el ){
		return document.getElementById( el );
	 }

	/*id(xx).quando apertar e soltar uma tecla  recebe(=) função contendo func. mascara com o parametro esse mtel(this,mtel)*/
		window.onload = function() {
			id('tel-reg').onkeyup = function() { 
				mascara(this, mtel)
			}
		 }


function registrar() {
	// body...
	alert("registrado")
 }