var counter = 0;
document.getElementById('myBtn').addEventListener('click', addMe);
document.addEventListener(
    'click',
    function (e) {
        if (hasClass(e.target, 'individualElement')) {
            removeElement(e.target.parentNode.id);
        }
    },
    false
);

function addMe() {
    let inputValueEntered = document.getElementById('myTask').value;
    let inputElement = document.createElement('input');
    let cancelbtn = document.createElement('button');

    let resultantDiv = document.getElementById('divId');
    let divElement = document.createElement('div');

    inputElement.setAttribute('value', inputValueEntered);

    cancelbtn.innerHTML = 'X';

    cancelbtn.setAttribute('class', 'individualElement');
    divElement.setAttribute('id', counter++);
    divElement.appendChild(inputElement);
    divElement.appendChild(cancelbtn);
    resultantDiv.appendChild(divElement);
}

function hasClass(elem, className) {
    return elem.classList.contains(className);
}

function removeElement(id) {
    var elem = document.getElementById(id);
    return elem.parentNode.removeChild(elem);
}