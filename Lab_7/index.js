const form = document.querySelector('form')

form.addEventListener('submit', (event) =>{
    event.preventDefault();
});

const nameSpan = document.getElementById('nameSpan');

const nameInput = form.querySelector('input[name =name]');

nameInput.addEventListener('input', () =>{
    const nameValue = nameInput.value;
    nameSpan.textContent = nameValue;
});

// nameInput.addEventListener('keypress', (event) =>{
//     console.log(evnt);
//     if(event.keyCode === 116){
//         event.preventDefault();
//     }
// });

const passwordInput = form.querySelector('#password');
const ShowHidePasswordInput = form.querySelector('#ShowHidePassword')

ShowHidePasswordInput.addEventListener('change', function(){
    if(ShowHidePasswordInput.checked){
        passwordInput.type = "text";
    }
    else{
        passwordInput.type = "password";
    }
});

function displayList(){
    list.replacedChildren();
    const checkedHobbies = document.querySelector('input[name="hobbies"]:checkbox');
    checkbokedHobbies.forEach(hobby => {
        const item = document.createElement('li');
        item.textContent = hobby.value;
        list.appendChild(item);
    });
}

const phoneContainer = form.querySelector('#phone-container')
const showHidePhoneInput = form.querySelector('#showHidePhone')
showHidePhoneInput.addEventListener('change', function(){
    phoneContainer.hidden = showHidePhoneInput.checked;

});



