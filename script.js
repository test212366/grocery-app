const appList = data => {
	const app = document.createElement('div')
	app.insertAdjacentHTML('afterbegin', `
		<h1>${data.title}</h1>

		<button id="btn" class="btn">${data.btnText}</button>
		<form id="list-add-form" class="form">
			<input type="text" id="input">
			<button id="add-list-item" class="btn">+</button>
		</form>


		<ul class="list"></ul>
	
	`)
	document.body.appendChild(app)
	return app
}
appList({
	title: 'Список покупок',
	btnText: 'Добавить элемент'
})

const button = document.getElementById('btn'),
	form = document.getElementById('list-add-form'),
	input = document.getElementById('input'),
	list = document.querySelector('.list')

function createElement(e) {
	e.preventDefault()
	const item = document.createElement('li')
	item.textContent = input.value
	list.appendChild(item)
	input.value = ''
}

button.addEventListener('click', () => {
	form.classList.toggle('active')
})

form.addEventListener('submit', createElement)