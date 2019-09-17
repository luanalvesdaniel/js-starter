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

* **Eventos inline**
* **Trabalhando com a DOM**
* **Lidando com elementos**
* **Alterando estilos**

### **App de Todos**

* **Estrutura do app**
* **Iniciando a aplica��o**
* **Renderizando Todos**
* **Criando Todos**
* **Excluindo Todos**
* **Salvando no storage**

### **JS ass�ncrono**

* **Requisi��es AJAX**
* **Promises**
* **Utilizando Axios**

## **Curso JavaScript ES6**
## **NodeJS**
## **ReactJS**
## **React Native**
