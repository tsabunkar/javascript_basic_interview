// !Async-Await
var personId = async (id) => {
    var user = {
        id: id,
        name: 'Tejas'
    };

    try {
        let promiseObject = await asynOperation(user);
        console.log('promiseObject ---', promiseObject);
    } catch (err) {
        console.log(err);
    }

    function asynOperation(myUser) {
        return new Promise((resolve, reject) => {
            if (0) {
                setTimeout(() => {
                    console.log('2 seconds done');
                    resolve(myUser);
                }, 2000)
            } else {
                reject('My Error');
            }
        })
        /* return new Promise(
            resolve => {
                setTimeout(() => {
                    console.log('2 seconds done');
                    resolve('Welcome to async world');
                }, 2000)
            }, reject => {
                reject('MyError')
            }) */

    }
};

personId(12)