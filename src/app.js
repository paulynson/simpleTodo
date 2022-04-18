// Declaring all variable
var container = document.querySelector('.container');
var userList = document.querySelector('.name-list');
var listInput = document.querySelector('.list-input');
var addListBtn = document.querySelector('.addListBtn');
var scrollAdd = document.querySelector('.scrollAdd');
addListBtn.disabled = true;
//Event Listener when button is clicked
addListBtn.addEventListener('click', function (e) {
    //Prevent page from reloading
    e.preventDefault();
    // Add input value to the new <li> tag
    if (listInput.value === '') {
        addListBtn.disabled = true;
    }
    else {
        addListBtn.disabled = false;
        var newLi_1 = document.createElement('li');
        var liContent = document.createTextNode(listInput.value);
        //create an <li> tag and a textNode
        newLi_1.appendChild(liContent);
        userList.prepend(newLi_1);
        container.classList.remove('active');
        listInput.value = '';
        // Lint Through when Task is done
        newLi_1.addEventListener('click', function () {
            newLi_1.style.textDecoration = 'line-through';
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
    scrollAdd.addEventListener('click', function (e) {
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
console.log("hello");
