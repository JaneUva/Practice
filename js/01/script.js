const button = document.getElementById('enter');
const input = document.getElementById('userinput');
const unorderedlist = document.querySelector('ul');

const inputLength = () => {
    return input.value.length;
};

const createListElement = () => {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value));
    decorateListItem(li);
    unorderedlist.appendChild(li);
    input.value = '';
};

const addListAfterClick = () => {
    if (inputLength() > 0) {
        createListElement();
    }
};

const addListAfterKeyPress = (event) => {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
};

const decorateListItem = (listItem) => {
    const deleteButton = document.createElement('button');
    deleteButton.innerText = "delete";
    deleteButton.addEventListener('click', () => {
        unorderedlist.removeChild(listItem);
    });
    listItem.addEventListener('click', function () {
        this.classList.toggle('done');
    });
    listItem.appendChild(deleteButton);
};


const listAsArray = Array.from(unorderedlist.querySelectorAll('li'));

listAsArray.forEach((node) => {
    decorateListItem(node);
});

button.addEventListener('click', addListAfterClick);

input.addEventListener('keypress', addListAfterKeyPress);
