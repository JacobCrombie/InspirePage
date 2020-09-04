export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);
    //NOTE Have you ever wanted to know the temperature measured in kelvin? 
    //      That is what this data returns! data.main.temp is the temperature in Kelvin


    //TODO You should convert the temperature data to either F or C
    //      check out the other data that comes back and see if there is anything you want to try

    this.city = data.name
    this.kelvin = data.main.temp
  }
  get weatherTemplate(){
    return `
    <div class="card shadow mr-2 mt-2">
    <div class="card-body">
        <h4 class="card-title">${this.kelvin}°</h4>
        <p class="card-text">${this.city}</p>
    </div>
</div>
    `
  }
}