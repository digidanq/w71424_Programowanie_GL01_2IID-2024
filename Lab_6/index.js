// const div1 = document.querySelectorAll(".przyklad")

// console.log(div1);
// div1.innerHTML = '<span>Test</span>';

// function test(){
//     console.log("click");
// }

// div1.addEventListener('', () => {
//     console.log('click');
// });

// document.getElementById('inputId').addEventListener('keypress', (ev) => {
//     console.log(ev);
//     if(ev.key === 'g'){
//         ev.preventDefault();
//     }
// } );



// Zadanie 1
console.log(silnia(5));
function silnia(n){
    return n <= 1? 1: n * silnia(n - 1);
}

// Zadanie 2
const btns = document.querySelectorAll('.btn');
let selected = null;
btns.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('selected');
        if(selected)
            selected.classList.remove('selected');
        selected = btn;
    });
});

// Zadanie 2
function toggleVisibility() {
	const element = document.getElementById('ukryty-element');
		if (element.style.display === 'none') {
			element.style.display = 'block';
		} else {
			element.style.display = 'none';
		}
}

// Zadanie 4
const nameInput = document.getElementById('name');
const surnameInput = document.getElementById('surname');
const list = document.querySelector('ul');
const table = document.querySelector('table');

document.getElementById('save').addEventListener('click', () => {
    const name = nameInput.value;
    const li = document.createElement('li');
    li.textContent = name;
    list.appendChild(li);


    // Zadanie 5
    const surname = surnameInput.value;
    const newRow = table.insertRow();
    const newCell = newRow.insertCell();
    newCell.textContent = name;
    const newCell2 = newRow.insertCell();
    newCell2.textContent = surname;
});
