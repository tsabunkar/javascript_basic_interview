var getUser = (id, callback) => {

    console.log('in getUser func'); // op1
    var user = {
        id: id,
        name: 'Tejas'
    };
    // !async operation
    setTimeout(() => {
        callback(user);
    }, 2000)

    // callback('welcome to callback world');


    console.log('out getUser func') //op2
};


getUser(12, (userObj) => {
    console.log('in of callback func'); //op3
    console.log(userObj); // op4
    console.log('out of callback func'); //op5
})