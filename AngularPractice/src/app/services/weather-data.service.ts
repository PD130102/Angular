import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {

  constructor(private http: HttpClient) { }
  getWeather(city: string) {
    return this.http.get(`https://api.weatherapi.com/v1/current.json?key=fbe103d4de7a4d7897665643220509&q=` + city + `&aqi=yes`);
  }

  getForecast(city: string) {
    return this.http.get(`https://api.weatherapi.com/v1/forecast.json?key=fbe103d4de7a4d7897665643220509&q=` + city + `&days=1&aqi=yes&alerts=yes`);
  }
  getweather(date: string) {
    return this.http.get(`https://api.weatherapi.com/v1/history.json?key=fbe103d4de7a4d7897665643220509&q=London&dt=` + date);
  }
}
