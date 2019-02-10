var locales = {
  india: function () { // The India continent's local scope
    var myFriend = 'Kapil';

    var karnataka = function () { // The Karnataka country's local scope
      var myFriend = 'Subash';

      var bangalore = function () { // The bangalore city's local scope
        var myFriend = 'Lokesh';
        console.log('bangalore frnd ', myFriend);
      };

      console.log('Karanatak frnd ', myFriend);
      bangalore();
    };


    console.log('India frnd', myFriend);
    karnataka();
  }
};

locales.india();