function changeDivColor() {
    // console.log('func triggered/called');
    let divElement = document.getElementById('divId');

    divElement.style.color == "red" ? divElement.style.color = "magenta" : divElement.style.color = "red";
}