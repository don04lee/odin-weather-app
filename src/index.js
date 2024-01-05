const page = document.getElementById('page');
const button = document.getElementById('button');
const input = document.getElementById('input');

input.addEventListener("keypress", function(event) {
  if(event.key == "Enter") {
    event.preventDefault();
    document.getElementById("button").click();
  }
})

button.addEventListener("click", function(event) {
  getWeather(input);
})

async function getWeather(text) {
  let textInput = text.value;
  let place = document.getElementById('place');
  let temp = document.getElementById('temp');
  let feelsliketemp = document.getElementById('feelsliketemp');
  let condition = document.getElementById('condition');

  if(textInput !== null) {
    try {
      let response = await fetch('http://api.weatherapi.com/v1/current.json?key=e9b6aed4d9a549eebe9235738240301&q=' + textInput.toString());
      let weatherData = await response.json();
      place.textContent = weatherData.location.name + ",\n" + weatherData.location.region;
      temp.textContent = weatherData.current.temp_c + "°C / " + weatherData.current.temp_f + "°F";
      feelsliketemp.textContent = "Feels Like: " + weatherData.current.feelslike_c + "°C / " + weatherData.current.feelslike_f + "°F"
      condition.textContent = weatherData.current.condition.text;
      console.log(weatherData);
    }
    catch(err) {
      temp.textContent = "No available city.";
    }
  }
}