 // ! Using promise
var personId = (id) => {
    console.log('op1');
    var user = {
        id: id,
        name: 'Tejas'
    };

   
    const promiseObject = new Promise(function (resolve, sabunkar) {
        if (1) {
            // if (0) {

            // resolve('Welcome to promise world');

            // db conn, crud db, when u make backend call
            setTimeout(() => {
                console.log('2 seconds done');
                resolve(user);
            }, 2000)

            console.log('op2');

        } else {
            sabunkar('My Error')
        }

    });

    console.log('op3');

    console.log('promiseObject --', promiseObject);
    // console.log('promiseObject typeof -',typeof (promiseObject));

    promiseObject.then(data => {
        console.log('my Data is', data);
        // console.log('my Data is type of - ', typeof( data));
    }).catch(err => {
        console.log('myError is', err);
    })

    console.log('op4');

}

personId(12)