# **js-starter**

Curso Starter da Rocketseat.

## **Curso JavaScript**

### **Introdu��o JavaScript**

* **Introdu��o**

 JavaScript � uma linguagem que nos permite executar scripts interpretador a partir do cliente da nossa aplica��o, ou seja, no navegador. Realiza a��es na p�gina web no lado do cliente, onde n�o h� necessidade de resposta do servidor para executar ou apresentar alguma coisa.

> Exemplo: Ao clicar em algum bot�o e a p�gina n�o recarrega apresentando ou alterando alguma coisa, como mostrando um alerta ou alterando a cor de algo.

O JS � aplicado em diversos websites atuais, como netflix, youtube, facebook, dentre outros. � usado no front-end.

* **Configurando ambiente**

1. Baixar o [VSCode](https://code.visualstudio.com/);
2. Criar o arquivo `index.html` em alguma pasta;
3. Abrir o arquivo no navegador e acessar o console do `Inspecionar`;
4. Abrir o arquivo `index` no VSCode;
5. Inserir o c�digo abaixo
```html
<html>
	<head>
		<title>Curso JS</title>
	</head>
	<body>
		<script>
			// Aqui fica todo o c�digo JavaScript
			console.log('hello world');
		</script>
	</body>
</html>
```
6. Atualizar a p�gina aberta no navegador e verificar que apresentar� a frase, arquivo e linha anteriormente configurados.

* **Vari�veis e dados**

A vari�vel ir� armazenar algum tipo de valor.

No JS n�o existe tipagem est�tica, ou seja, n�o h� necessidade de definir o tipo da vari�vel.
> Exemplo: 
`String nome;`
`float altura;`

Em JavaScript a vari�vel sempre inicia com `var`, conforme c�digo abaixo.
> Inserir dentro da tag `script` do arquivo `.html`
```javascript
var nome = "Fulano"; //String
var idade = 20;	//int
var peso = 80.2; //float
var humano = true; //boolean

var alunos = ['Fulano','Ciclano','Beltrano']; //vetores

var aluno = {	//objeto
	nome: 'Fulano',
	idade: 20,
	peso: 80.2,
	humano: true
};

//Acessando e apresentando o array
console.log(alunos);

//Acessando e apresentando o segundo nome do array
console.log(alunos[1]);

//Acessando e apresentando o objeto (atributo nome)
console.log(aluno.nome);
```

* **Opera��es matem�ticas**

Soma (+), multiplica��o (*), divis�o (/), dentre outros.
> Inserir dentro da tag `script` do arquivo `.html`
```javascript
var x = 10, y = 5;

var soma = x + y;

console.log("Soma: "+ soma);

// Incremento de x
//x = x * y;
x *= y;

console.log(x);
```

* **Fun��es**

Servem para padronizar algum tipo de execu��o, opera��o, c�lculo, etc.
> Inserir dentro da tag `script` do arquivo `.html`
```javascript
function soma(numero1, numero2){
	var resultado = numero1 + numero2;

	return resultado;
}

var resultado = soma(1, 2);
console.log(resultado);
console.log(soma(5,5));
```

* **Condicionais**

Opera��es de um ou outro, caso seja, se � igual ou diferente, escolha caso, etc
> Inserir dentro da tag `script` do arquivo `.html`
```javascript
function retornaSexoIf(sexo){
	if(sexo === 'M'){
		return 'Masculino';
	} else if (sexo === 'F') {
		return 'Feminino';
	} else {
		return 'Outro';
	}
}			
console.log(retornaSexoIf('M'));

function retornaSexoSwitch(sexo){
	switch(sexo){
		case 'M':
			return 'Masculino';
		case 'F':
			return 'Feminino';
		default:
			return 'Outro';
	}
}
console.log(retornaSexoSwitch('F'));
```

* **Operadores l�gicos**

Usados para encontrar alguma coisa, como inf1 = 1 e inf2 = 2, inf1 = 1 ou inf2 = 2.
> Inserir dentro da tag `script` do arquivo `.html`
```javascript
var sexo = 'M', idade = 20;
//Verificar se sexo � igual a M e idade maior a 18
if (sexo === 'M' && idade >= 18) {
	console.log('sexo E idade OK');
}
//Verificar se sexo � igual a M e idade maior a 18
if (sexo === 'M' || idade >= 30) {
	console.log('sexo OU idade OK');
}
//Verificar a desigualdade
if (sexo !== 'F') {
	console.log('desigualdade de sexo OK');
}
//Armazenando resultados de condi��es em vari�veis
var masculino = (sexo === 'M');
console.log(masculino);
```

* **Condi��o tern�ria**

Se aplica quando temos apenas um if e um else, ou seja, apenas duas verifica��es.
> De
```javascript
if (sexo === 'M') {
	return 'Masculino';
} else {
	return 'Feminino';
}
```
> Para
```javascript
// Quando '?' significa que atende a condi��o (positivo), ap�s o ':' � o que n�o atende (negativo)
var retorno = (sexo === 'M') ? 'Masculino' : 'Feminino';
```

* **Estruturas de repeti��o**

La�os de repeti��o para que o c�digo fa�a alguma coisa durante uma determinada condi��o, como FOR e WHILE.

Utiliza-se o FOR sempre que possuir o tamanho do intervalo, j� o WHILE quando n�o se sabe quantas vezes o la�o ir� se repetir.

```javascript
// Repetir entre 0 e 10
for (var i = 0; i <= 10; i++) {
	console.log("i: "+i);
}
var j = 1231241254;
while(j > 50){
	console.log(j);
	j /= 5;
}
```

* **Intervalo e timeout**

Intervalo executa alguma fun��o v�rias vezes seguindo o tempo estimado.

Timeout vai executar apenas uma vez ap�s o tempo estimado.
```javascript
function exibeAlgo(){
	console.log('Hello World');
}
//Executa a fun��o exibeAlgo a cada 1 segundo
setInterval(exibeAlgo,1000);

//Executa apena uma vez e ap�s 5 segundos
setTimeout(exibeAlgo, 5000);
```

### **Manipulando a DOM**

A DOM � basicamente a �rvore de elementos dentro do HTML no qual o JavaScript poder� controlar.

> Inserir no come�o da tag `body`:
```html
<div id="app">
	<button>Me pressione</button>
</div>
```

* **Eventos inline**

> Dentro do `body`
```html
<div id="app">
	<button onclick="mostraAlerta()">Me pressione</button>
	<input type="text" onkeypress="mostraAlerta()"/>
</div>
```

> Dentro do `script`
```javascript
function mostraAlerta(){
	alert('Bot�o foi clicado');
}
```

* **Trabalhando com a DOM**

Referenciar/buscar os elementos em tela do HTML atrav�s do JavaScript.
`getElement` ir� procurar e selecionar o elemento atrav�s de algum atributo dele.
`querySelector` ir� percorrer toda a DOM.

> Exemplos:
```html
<div id="app">
	<input type="text" name="nome" id="nome" class="nome"/>
	<input type="text" name="nome" id="nome2"/>
	<button class="botao">Adicionar</button>
</div>
```
```javascript
// Exemplo 1
var inputElement1 = document.getElementById('nome');
console.log(inputElement1);

// Exemplo 2
var inputElement2 = document.getElementsByTagName('input')[1];
console.log(inputElement2);

// Exemplo 3
var inputElement3 = document.getElementsByClassName('nome');
console.log(inputElement3);

// Exemplo 4 e mais indicado
var inputElement4 = document.querySelector('body div#app input'); 
//Procurando pelo atributo = ('input[name=nome]');
//Retornar todos os elementos input = querySelectorAll('input'); 
console.log(inputElement4);

// Pegando os elementos do HTML e referenciando no JS
var inputElement5 = document.querySelector('input[name=nome]');
var btnElement = document.querySelector('button.botao');

// Apresenta Alerta caso bot�o clicado
btnElement.onclick = function(){
	//Pegar o texto inserido no campo e retornar no alert ap�s clicar em Adicionar
	var text = inputElement5.value;
	alert(text);
}
```

* **Lidando com elementos**

Al�m de manipular os elementos do HTML atrav�s do JS, tamb�m conseguimos criar novos elementos tamb�m pelo JS, assim como remove-los
```html
<div id="app">
	<input id="nome"/>
</div>
```
```javascript
// Criando o elemento e os atributos
var linkElement = document.createElement('a');
linkElement.setAttribute('href', 'https://www.google.com');
linkElement.setAttribute('title', 'Site do google');
linkElement.setAttribute('id', 'googlesite');

// Criando um texto e atribuindo ao href
var textElement = document.createTextNode('Acessar Google');
linkElement.appendChild(textElement);

// Referenciando a div e inserindo o link
var containerElement = document.querySelector('#app');
containerElement.appendChild(linkElement);

// Removendo um elemento da DOM pelo JS
var inputElement = document.querySelector('#nome');
containerElement.removeChild(inputElement);
```

* **Alterando estilos**

Al�m de manipular os atributos dos elementos, adicionar ou remover elementos em tela, conseguimos controlar as estiliza��es CSS dos elementos atrav�s do JS.
```html
<body>
	<div id="app">
		<div class="box"></div>
	</div>

	<script>
		var boxElement = document.querySelector('.box');
		boxElement.style.width = 100;
		boxElement.style.height = 100;
		boxElement.style.backgroundColor = '#f00';
	</script>
</body>
```

### **App de Todos**

* **Estrutura do app**

1. Declarar uma lista juntamente com um link de exclus�o
```html
<div id="app">
	<ul>
		<li>
			Fazer caf�
			<a href="#">Excluir</a>
		</li>
		<li>
			Estudar Javascrip
			<a href="#">Excluir</a>
		</li>
		<li>
			Acessa site do Google
			<a href="#">Excluir</a>
		</li>
	</ul>
</div>
```
2. input com o `todo` e bot�o de adicionar
> Ap�s lista
```javascript
	<input type="text" placeholder="Digite um todo">
	<button>Adicionar</button>
```
3. Cria��o do arquivo `todos.js`
```javascript
alert('funcionou');
```
4. Referenciando o `todos.js` no `script` do HTML
```html
<script src="todos.js"></script>
```

* **Iniciando a aplica��o**

1. Referenciar os elementos do HTML no JS
> todos.js
```javascript
var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var butonElement = document.querySelector('#app button');
```
2. Possuir a lista de `todos` tamb�m no JS
```javascript
var todos = [
	'Fazer caf�',
	'Estudar Javascript',
	'Acessar site do Google'
];
```
3. Tirar a lista est�tica do html
```html
<body>
	<div id="app">
		<ul></ul>
		<input type="text" placeholder="Digite um todo">
		<button>Adicionar</button>
	</div>
	<script src="todos.js"></script>
</body>
```

* **Renderizando Todos**

Criar uma fun��o para renderizar a lista de `todos` pelo JS
```javascript
function renderTodos(){
	for(todo of todos){
		var todoElement = document.createElement('li');
		var todoText = document.createTextNode(todo);

		todoElement.appendChild(todoText);
		listElement.appendChild(todoElement);
	}
}

renderTodos();
```

* **Criando Todos**

Dar funcionalidade no bot�o de `Adicionar`
```javascript
function renderTodos(){
	listElement.innerHTML = '';
	for(todo of todos){
		var todoElement = document.createElement('li');
		var todoText = document.createTextNode(todo);

		todoElement.appendChild(todoText);
		listElement.appendChild(todoElement);
	}
}

renderTodos();

function addTodo() {
	var todoText = inputElement.value;
	todos.push(todoText);
	inputElement.value = '';
	renderTodos();
}

butonElement.onclick = addTodo;
```

* **Excluindo Todos**

Possuir o link de Excluir em todos os `todos`, para isso teremos que alterar a fun��o `renderTodos` pois possui a nossa lista de todos.
```javascript
function renderTodos(){
	listElement.innerHTML = '';
	for(todo of todos){
		var todoElement = document.createElement('li');
		var todoText = document.createTextNode(todo);
		var linkElement = document.createElement('a');
		linkElement.setAttribute('href','#');
		// Vai retornar a posi��o onde se encontra o texto do todo
		var pos = todos.indexOf(todo);
		linkElement.setAttribute('onclick','deleteTodo('+ pos +')');
		var linkText = document.createTextNode('Excluir');
		linkElement.appendChild(linkText);
		todoElement.appendChild(todoText);
		todoElement.appendChild(linkElement);
		listElement.appendChild(todoElement);
	}
}

renderTodos();

function addTodo() {
	var todoText = inputElement.value;
	todos.push(todoText);
	inputElement.value = '';
	renderTodos();
}

buttonElement.onclick = addTodo;
```
Criando uma fun��o para deletar o `todo` na posi��o onde se encontra a op��o de exclus�o
```javascript
function deleteTodo(pos) {
	todos.splice(pos, 1);
	renderTodos();
}
```

* **Salvando no storage**

Salvar no armazenamento local do navegador para que n�o seja necess�rio ficar rendedizando a lista de `todos`
> `todos.js` final
```javascript
var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');
// Usa-se o JSON para que interprete a lista contida no localStorage ou inicia vazio
var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos(){
	listElement.innerHTML = '';
	for(todo of todos){
		var todoElement = document.createElement('li');
		var todoText = document.createTextNode(todo);
		var linkElement = document.createElement('a');
		linkElement.setAttribute('href','#');
		// Vai retornar a posi��o onde se encontra o texto do todo
		var pos = todos.indexOf(todo);
		linkElement.setAttribute('onclick','deleteTodo('+ pos +')');
		var linkText = document.createTextNode('Excluir');
		linkElement.appendChild(linkText);
		todoElement.appendChild(todoText);
		todoElement.appendChild(linkElement);
		listElement.appendChild(todoElement);
	}
}

renderTodos();

function addTodo() {
	var todoText = inputElement.value;
	todos.push(todoText);
	inputElement.value = '';
	renderTodos();
	saveToStorage();
}

buttonElement.onclick = addTodo;

function deleteTodo(pos) {
	todos.splice(pos, 1);
	renderTodos();
	saveToStorage();
}

function saveToStorage() {
	// Utiliza-se o JSON para conversar vetor e strings para que o localStorage consiga pegar e armezar a informa��o
	localStorage.setItem('list_todos', JSON.stringify(todos));
}
```

### **JS ass�ncrono**

* **Requisi��es AJAX**

S�o requisi��es ao backend (servidor) sem precisar recarregar a p�gina.

Utilizando a api de usu�rios do github e pegando o retorno da mesma
```javascript
var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.github.com/users/usuario');
xhr.send(null);

// 
xhr.onreadystatechange = function () {
	// quando 4 significa que a resposta voltou
	if (xhr.readyState === 4 ){
		console.log(JSON.parse(xhr.responseText));
	}
}
```

* **Promises**

S�o c�digos que n�o v�o influenciar na linha do tempo do c�digo JS.

� uma classe que permite trabalhar com m�todos de respostas e erros, como a api que estamos utilizando, trabalhando de forma ass�ncrona dentro do JS.
```javascript
var minhaPromise = function () {
	return new Promise(function(resolve, reject){
		// resolve e reject tamb�m s�o fun��es
		// resolve � quando o resultado obteve sucesso
		// reject � quando o resultado n�o obteve sucesso
		var xhr = new XMLHttpRequest();
		xhr.open('GET','https://api.github.com/users/usuario');
		xhr.send(null);

		xhr.onreadystatechange = function(){
			if(xhr.readyState === 4){
				if (xhr.status === 200){
					resolve(JSON.parse(xhr.responseText));
				} else {
					reject('Erro na requisi��o');
				}
			}
		}
	});
}

minhaPromise()
	.then(function(response){
		console.log(response);
	})
	.catch(function(error) {
		console.warn(error);
	});
```

* **Utilizando Axios**

Usando a biblioteca Axios para fazer requisi��es ass�ncronas do projeto JS.

> Inserindo o script no HTML para importar o Axios
```html
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script src="main.js"></script>
```
> Nova forma usando o axios
```javascript
axios.get('https://api.github.com/users/luanalvesdaniel')
	.then(function(response){
		console.log(response);
	})
	.catch(function(error) {
		console.warn(error);
	});
```

## **Curso JavaScript ES6**

### **Conceitos**

**Introdu��o**
- ES (Ecma Script)
- 6 � a vers�o, sendo ano de lan�amento + 1, ou seja, ES6 � de 2015
- O Ecma Script formula e define as novas funcionalidades do Javascript
- Comparando o antes e a partir do ES6 o Javascript � completamente diferente, com exce��o da sintaxe
- Com o avan�o da tecnologia e internet, os navegadores atualmente s�o considerados um pouco lentos quando comparados com esse avan�o, inclusive alguns navegadores podem n�o entender as novas diretrizes do ES6 em diante. Portanto iremos utilizar o `Babel`, sendo uma funcionalidade que ir� pegar o c�digo desenvolvido e converter o mesmo em um c�digo que todos os navegadores entendam as novas formas de escrever os c�digos.

**Instalando Node & Yarn**

NodeJS � uma importante ferramenta para possuirmos todas as depend�ncias que necessitamos ao nosso projeto
* [Baixar NodeJS](https://nodejs.org/en/)
> Para validar basta digitar `node -v` para verificar a vers�o instalada

Yarn � um gerenciador de pacotes do javascript, onde ser� utilizado para instalar ferramentas de outras empresas/pessoas em nosso projeto para que possamos usar essas funcionalidades e nossa aplica��o
* [Baixar Yarn](https://yarnpkg.com/pt-BR/docs/install) 
> Para validar basta digitar `yarn -v` para verificar a vers�o instalada

**Configurando Babel**

1. Iniciar o terminal e executar o comando `yarn init`
	* Ir� criar o arquivo `package.json` dentro da raiz do projeto, onde armazena as informa��es de depend�ncias da nossa aplica��o, como ferramentas de outras empresas/pessoas
2. Instalando as demais depend�ncias
	* `yarn add @babel/cli`
	> babel/cli permitir� uma interface de linha de comando do babel, como j� fazemos com o `yarn add` por exemplo
	* `yarn add @babel/preset-env`
	> Criar� o arquivo `yarn.lock`, sendo uma forma de cache
	> Criar� a pasta `node_modules` com v�rios arquivos, onde armazena todas as depend�ncias do projeto


**Classes**

**Const & Let**

**Opera��es em Array**

**Arrow Functions**

**Valores padr�o**

**Desestrutura��o**

**Operadores rest/spread**

**Template Literals**

**Object Shot Syntax**

### **Webpack Server**

**Configurando Webpack**
**Importe/export**
**Webpack dev server**

### **Async/await**

**Async/await**
**Configurando Axios**

### **Aplica��o com ES6+**

**Estrutura e estilos**
**Adicionar reposit�rio**
**Render em tela**
**Buscando da API**
**Loading e error**

## **NodeJS**
## **ReactJS**
## **React Native**
