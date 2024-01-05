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
  // let city = document.createElement('div');
  // let region = document.createElement('div');
  // let temp_c = document.createElement('div');
  // let temp_f = document.createElement('div');
  // let feelslike_c = document.createElement('div');
  // let feelslike_f = document.createElement('div');
  // let condition = document.createElement('div');

  if(textInput !== null) {
    try {
      let response = await fetch('http://api.weatherapi.com/v1/current.json?key=e9b6aed4d9a549eebe9235738240301&q=' + textInput.toString());
      let weatherData = await response.json();
      console.log(weatherData);
      // city = weatherData.location.name;
      // region = weatherData.location.region;
      // temp_c = weatherData.current.temp_c;
      // temp_f = weatherData.current.temp_f;
      // feelslike_c = weatherData.current.feelslike_c;
      // feelslike_f = weatherData.current.feelslike_f;
  //    condition = weatherData.current.condition.text;
    }
    catch(err) {
      console.log("No available city.");
    }
  }
}