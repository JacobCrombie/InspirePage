import { ProxyState } from "../AppState.js";
import weatherService from "../Services/WeatherService.js";

//NOTE The weather service and controller are mostly done,
//		you may wish to check out the model and include some additional data.
function _drawWeather(){
  document.getElementById('weather').innerHTML = ProxyState.weather.weatherTemplate
  console.log("THE WEATHER MAN SAYS:", ProxyState.weather);
}
//TODO Complete rendering data to the screen

export default class WeatherController {
  constructor() {
    ProxyState.on("weather", _drawWeather);
    this.getWeather()
  }

  getWeather() {
    try {
      weatherService.getWeather()
    }
    catch (e) {
      console.error(e)
    }
  }
}
