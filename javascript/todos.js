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
		// Vai retornar a posição onde se encontra o texto do todo
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
	// Utiliza-se o JSON para conversar vetor e strings para que o localStorage consiga pegar e armezar a informação
	localStorage.setItem('list_todos', JSON.stringify(todos));
}