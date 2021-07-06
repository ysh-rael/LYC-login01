//VARIÁVEIS
	//USUARIOS E SENHA
		var password = '123'
 		var login = 'usuario@gmail.com'
		var inpEmail = window.document.getElementById('email-user')
		var inpSenha = window.document.getElementById('password-user')
		var mostrarSenha = window.document.getElementById('S-visivel')
	//TORNAR CAIXA VISIVEL
		var log = window.document.getElementById('inpt-for-login')
		var caixalogin = window.document.getElementById('login')
		var reg = window.document.getElementById('inpt-for-registro')
		var caixaregistrar = window.document.getElementById('registro')
		caixalogin.style.display = 'none'
		caixaregistrar.style.display = 'none'


	
//CHECKBOX PARA MOSTRAR SENHA
 mostrarSenha.addEventListener('click', function() {
	if (inpSenha.getAttribute('type') == 'password') {
		inpSenha.setAttribute('type', 'text')

	}else {
		inpSenha.setAttribute('type', 'password')
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

function registrar() {
	// body...
	alert("registrado")
 }
