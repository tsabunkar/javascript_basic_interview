var showState = function () {
    console.log("Idle");
};

function showState() {
    console.log("Ready");
}

showState(); // output:


// !-------------
/* function showState() {
    console.log("Ready");
}


var showState;

showState = function () {
    console.log("Idle");
};

showState(); */