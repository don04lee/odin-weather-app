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

  if(textInput !== null) {
    try {
      let response = await fetch('http://api.weatherapi.com/v1/current.json?key=e9b6aed4d9a549eebe9235738240301&q=' + textInput.toString());
      let weatherData = await response.json();
      console.log(weatherData.location.region);
      console.log(weatherData);
    }
    catch(err) {
      console.log("No available city.");
    }
  }
}