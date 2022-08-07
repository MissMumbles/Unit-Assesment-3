console.log("hello world");

let form = document.querySelector('#best-pkmn-gm');
let btn1 = document.querySelector('#color')
let btn2 = document.querySelector('#place')
let btn3 = document.querySelector('#ritual')

function handleSubmit(evt) {
    evt.preventDefault();
    alert('Submitted!');
}
form.addEventListener('submit', handleSubmit);

btn1.addEventListener('click', () =>{
    alert('Purple!')
})
btn2.addEventListener('click', () =>{
    alert('Star Valley, Wyoming')
})
btn3.addEventListener('click', () =>{
    alert('Morning Coffee!')
})
 






