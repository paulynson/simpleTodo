"use strict";
// Declaring all variable
const container = document.querySelector('.container');
const userList = document.querySelector('.name-list');
const listInput = document.querySelector('.list-input');
const addListBtn = document.querySelector('.addListBtn');
const scrollAdd = document.querySelector('.scrollAdd');
addListBtn.disabled = true;
//Event Listener when button is clicked
addListBtn.addEventListener('click', (e) => {
    //Prevent page from reloading
    e.preventDefault();
    // Add input value to the new <li> tag
    if (listInput.value === '') {
        addListBtn.disabled = true;
    }
    else {
        addListBtn.disabled = false;
        const newLi = document.createElement('li');
        const liContent = document.createTextNode(listInput.value);
        //create an <li> tag and a textNode
        newLi.appendChild(liContent);
        userList.prepend(newLi);
        container.classList.remove('active');
        listInput.value = '';
        // Lint Through when Task is done
        newLi.addEventListener('click', () => {
            newLi.style.textDecoration = 'line-through';
        });
    }
});
// addEventListener for Input value when empty
listInput.addEventListener('input', checkInput);
function checkInput() {
    if (listInput.value === '') {
        addListBtn.disabled = true;
    }
    else {
        addListBtn.disabled = false;
    }
}
// Add New Task Function
(function addNewTask() {
    scrollAdd.addEventListener('click', (e) => {
        e.preventDefault();
        scrollAdd.classList.toggle('active');
        if (container.classList.contains('active')) {
            container.classList.remove('active');
        }
        else {
            container.classList.add('active');
        }
    });
})();
