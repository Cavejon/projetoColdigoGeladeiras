function validaFaleConosco() {
	if (document.frmfaleconosco.txtnome.value == "") {
		alert("Preencha o campo Nome.");
		document.frmfaleconosco.txtnome.focus();
	} else {
		if (document.frmfaleconosco.txtfone.value == "") {
			alert("Preencha o campo telefone.");
			document.frmfaleconosco.txtfone.focus();
		} else {
			if (document.frmfaleconosco.txtemail.value == "") {
				alert("Preencha o campo email.");
				document.frmfaleconosco.txtemail.focus();
			} else {
				if (document.frmfaleconosco.selmotivo.value == "") {
					alert("Preencha o campo motivo.");
					document.frmfaleconosco.selmotivo.focus();
				} else {

					if (document.frmfaleconosco.txacomentario.value == "") {
						alert("Preencha o campo comentario.");
						document.frmfaleconosco.txacomentario.focus();
					}


					return false;
				}
			}
		}
	}
	return true;
}

function verificaMotivo(motivo) {

	var elemento = document.getElementById("opcaoProduto");

	//se o valor da variavel motivo for "PR"
	if (motivo == "PR") {
		//Criamos um elemento (tag) <select> e guardamos na varíavel homônima
		var select = document.createElement("select");
		//setamos nesse novo select o atributo 'name' com o valor 'selproduto'
		select.setAttribute("nome", "selproduto");
		//conteúdo atual da variável select:
		//<select name="selproduto"></select>

		//Criamos um elemento(tag)<option> e guardamos na variável homônima
		var option = document.createElement("option");
		//setamos nesse novo option o atributo 'value' com o valor vazio
		option.setAttribute("value", "");
		//Criamos um ní de texto "Escolha" e gravamos na variável 'texto'
		var texto = document.createTextNode("Escolha");
		//colocamos o nó de texto criado como "filho" da tag option criada
		option.appendChild(texto)
		//conteudo atual da variavel option;
		//<option value="">Escolha>/option>

		//colocamos o option criado como "filho" da tag option criada
		select.appendChild(option);
		//conteudo atual da variavel select:
		//<select name="selproduto"><option value="">Escolha</option></select>

		//criamos ul elemento (tag) <option> e guardamos na variável homônima
		var option = document.createElement("option");
		//setamos nesse novo option o atributo "value" com o valor "FR"
		option.setAttribute("value", "FR");
		//criamos um nó de texto "Freezer" e gravamos na variável 'texto'
		var texto = document.createTextNode("Freezer");
		//Colocamos o nó de texto criado como 'filho' da tag option criada
		option.appendChild(texto);
		//conteudo atual da variavel option:
		//<option value="FR">Freezer</option>

		//colocamos o option criado como "filho"da tag select criada
		select.appendChild(option);
		//conteudo atual da variavel select:
		/*
		<select name="selproduto">
		<option value="">Escolha</option><option value="FR">Freezer</option>
		</select>
		*/

		//criamos ul elemento (tag) <option> e guardamos na variável homônima
		var option = document.createElement("option");
		//setamos nesse novo option o atributo "value" com o valor "GE"
		option.setAttribute("value", "GE");
		//criamos um nó de texto "Freezer" e gravamos na variável 'texto'
		var texto = document.createTextNode("Geladeira");
		//Colocamos o nó de texto criado como 'filho' da tag option criada
		option.appendChild(texto);
		//conteudo atual da variavel option:
		//<option value="GE">Freezer</option>

		//colocamos o option criado como "filho"da tag select criada
		select.appendChild(option);
		//conteudo atual da variavel select:
		/*
		<select name="selproduto">
		<option value="">Escolha</option><option value="FR">Freezer</option>
		</select>
		*/

		//colocamos o select criado como "filho" da tag div capturada no inicio da função
		elemento.appendChild(select);
		//se o valor da variavel motivo não foi "PR"...
	} else {
		//se a div possuir algum "primeiro filho"
		if (elemento.firstChild)
			//removemos ele
			elemento.removechild(elemento.firstChild);
	}
}


/*Para validação do campo produto*/


function verificaProdutos(motivo) {

	const opcaoProduto = document.getElementById("opcaoProduto");

	if (select.value == "") {
		alert("Selecione o produto desejado.");
		select.focus();
	}
}
