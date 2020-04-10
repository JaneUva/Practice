var button = document.getElementById('enter');
var input = document.getElementById('userinput');
var unorderedlist = document.querySelector('ul');

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value));
    decorateListItem(li);
    unorderedlist.appendChild(li);
    input.value = '';
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeyPress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

function decorateListItem(listItem) {
    var deleteButton = document.createElement('button');
    deleteButton.innerText = "delete";
    deleteButton.addEventListener('click', function () {
        unorderedlist.removeChild(listItem);
    });
    listItem.addEventListener('click', function () {
        this.classList.toggle('done');
    });
    listItem.appendChild(deleteButton);
}


const listAsArray = Array.from(unorderedlist.querySelectorAll('li'));

listAsArray.forEach(node => {
    decorateListItem(node);
});

button.addEventListener('click', addListAfterClick);

input.addEventListener('keypress', addListAfterKeyPress);
