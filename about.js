console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submit');
}

let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

let img = document.querySelector('#grumpyCat')
img.addEventListener('mouseover', () =>{
	alert('You look nice today!')
})
