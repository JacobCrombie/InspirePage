import { ProxyState } from "../AppState.js";
import Weather from "../models/Weather.js";
import { api } from "./AxiosService.js";

class WeatherService {
  swapWeather() {
    let tempElem = document.getElementById('temp') //.innerHTML REVIEW ask why this doesnt work to set 
    let faren = ProxyState.weather.farenheit
    let celc = ProxyState.weather.celcius
    if (tempElem.innerHTML === faren) {
      return tempElem.innerHTML = celc
    } tempElem.innerHTML = faren
  }
  async getWeather() {
    console.log("Calling the Weatherman");
    let res = await api.get('weather');
    ProxyState.weather = new Weather(res.data);
  }
}

const weatherService = new WeatherService();
export default weatherService;