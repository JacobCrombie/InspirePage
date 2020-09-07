export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);
    //NOTE Have you ever wanted to know the temperature measured in kelvin? 
    //      That is what this data returns! data.main.temp is the temperature in Kelvin


    //TODO You should convert the temperature data to either F or C
    //      check out the other data that comes back and see if there is anything you want to try

    this.city = data.name
    this.kelvin = data.main.temp
    this.farenheit = (((this.kelvin - 273.15) * 1.8) + 32).toFixed(0) + '°F'
    this.celcius = (this.kelvin - 273.15).toFixed(0) + '°C'
  }
  get weatherTemplate() {
    return `
    <div class="card-body p-0 text-center w-shadow d-flex flex-direction-column justify-content-around">
        <h1 class="card-title pointer" id="temp" onclick="app.weatherController.swapWeather()">${this.farenheit}</h1>
        <h4 class="card-text align-self-center">${this.city}</h4>
    </div>
    `
  }
}