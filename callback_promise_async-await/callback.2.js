var getUser = async (id, callback) => {

    console.log('in getUser func'); // op1
    var user = {
        id: id,
        name: 'Tejas'
    };
    // setTimeout(() => {
    //     callback(user);
    // }, 2000)

    if (1)
        // if (0)
        callback(user);
    else
        callback('Error')

    console.log('out getUser func') //op2
};


getUser(12, (userObj) => {
    console.log('in getUser callbackfun'); //op3
    console.log(userObj); // op4
    console.log('out getUser callbackfun'); //op5

})