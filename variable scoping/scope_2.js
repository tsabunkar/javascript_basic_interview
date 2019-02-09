var locales = {
    india: function () { // The india continent's local scope
        var myFriend = 'Kapil';

        var karnataka = function () { // The karnataka country's local scope
            myFriend = 'Subash';

            var bangalore = function () { // The bangalore city's local scope
                myFriend = 'Lokesh';
                console.log('bangalore frnd', myFriend);
            };

            console.log('karnataka frnd', myFriend);
            bangalore();
        };


        console.log('India frnd', myFriend);
        karnataka();
    }
};

locales.india();