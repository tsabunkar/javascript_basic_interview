let url = 'https://restcountries.eu/rest/v2/all';

function fetchAllCountries() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // !logic- Get all array of objects flag
            // console.log(this.responseText);
            let divElement = document.getElementById('divId');
            let countries = JSON.parse(this.responseText);

            /*    console.log(typeof (this.responseText));
               console.log(typeof (countries)); */
            console.log(countries);
            console.log(countries.name);

            for (let index = 0; index < countries.length; index++) {
                console.log(countries[index].name);

            }

          
            divElement.innerHTML = countries[index].name;
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}