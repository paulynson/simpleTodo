// Declaring all variable
const container = document.querySelector('.container') as HTMLDivElement;
const userList: any = document.querySelector('.name-list') as HTMLUListElement;
const listInput: any = document.querySelector(
  '.list-input'
) as HTMLInputElement;
const addListBtn: any = document.querySelector(
  '.addListBtn'
) as HTMLButtonElement;
const scrollAdd: any = document.querySelector('.scrollAdd');
addListBtn.disabled = true;

//Event Listener when button is clicked
addListBtn.addEventListener('click', (e: any) => {
  //Prevent page from reloading
  e.preventDefault();
  // Add input value to the new <li> tag
  if (listInput.value === '') {
    addListBtn.disabled = true;
  } else {
    addListBtn.disabled = false;
      const newLi = document.createElement('li');
      newLi.className = "li-type"
    const span = document.createElement('span');
      const liContent = document.createTextNode(listInput.value);
      const date = new Date();
      const tDate: any = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()} - ${date.getHours()}: ${date.getMinutes()}: ${date.getSeconds()}`!;
      span.append(tDate)
    //   const checkedInp = document.createElement("input")

    //create an <li> tag and a textNode
    newLi.append(liContent, span);
    // userList.prepend(newLi, checkedInp);
    userList.prepend(newLi);
      container.classList.remove('active');
      scrollAdd.classList.remove('active');
    listInput.value = '';

    // Lint Through when Task is done
    newLi.addEventListener('click', () => {
      newLi.style.textDecoration = 'line-through';
    });

    let myStore = [];

    myStore.push(userList.childNodes);
    console.log(myStore);

    // window.addEventListener('load', getData);

      
      // Function for localStorage
    // function getData() {
      window.localStorage.setItem('data', JSON.stringify(userList.childNodes));

      let myData = JSON.parse(window.localStorage.getItem('data')!);
      console.log(myData);
    //   }
      
    //   localStorage.removeItem("data")

    //   (document.body.innerHTML)! = myStore;
  }

});

// addEventListener for Input value when empty
listInput.addEventListener('input', checkInput);
function checkInput() {
  if (listInput.value === '') {
    addListBtn.disabled = true;
  } else {
    addListBtn.disabled = false;
  }
}

// Add New Task Function
(function addNewTask() {
  scrollAdd.addEventListener('click', (e: any) => {
    e.preventDefault();
    scrollAdd.classList.toggle('active');
    if (container.classList.contains('active')) {
        container.classList.remove('active');
    } else {
        container.classList.add('active');
     
    }
  });
})();
