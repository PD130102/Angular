import { Component, OnInit } from '@angular/core';
import { WeatherDataService } from '../services/weather-data.service';
@Component({
  selector: 'app-weather-display',
  templateUrl: './weather-display.component.html',
  styleUrls: ['./weather-display.component.css']
})
export class WeatherDisplayComponent implements OnInit {

  public weatherData:any;
  public temperature :any;
  public pressure:any;
  public humidity:any;
  public forecastData:any;
  public maxtemp!: any[];
  constructor(private data : WeatherDataService) { }

  ngOnInit(): void {
  }
  getWeatherData(city:string){
    this.data.getWeather(city).subscribe((data)=>{
      this.weatherData = data;
      this.temperature = this.weatherData.current.temp_c;
      this.pressure = this.weatherData.current.pressure_mb;
      this.humidity = this.weatherData.current.humidity;
      console.log(this.weatherData);
    })
  }
  getForecastData(city:string){
    this.data.getForecast(city).subscribe((data)=>{
      this.forecastData = data;
      this.maxtemp = this.forecastData.forecast.forecastday[0].day.maxtemp_c;
      console.log(this.forecastData);
    })
  }
  
}