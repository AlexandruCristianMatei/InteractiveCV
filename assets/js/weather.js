var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var name = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');

const KELVIN = 273;

button.addEventListener('click', function(event) {
    event.preventDefault();
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&
appid=9b5bf8faf324fbceed6501d6df1f2ed5`;
    fetch(api)
        .then(response => response.json())
        .then(data => {
            var nameValue = data['name'];
            var tempValue = data['main']['temp'];
            var descValue = data['weather'][0]['description'];

            name.innerHTML = nameValue;
            desc.innerHTML = descValue;
            temp.innerHTML = Math.floor(tempValue - KELVIN);

        })
        .then(document.querySelector('span').style.display = 'block')
        .catch(err => alert('Wrong city name!'))
})