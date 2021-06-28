import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private WeatherAPI: string =
    'https://api.openweathermap.org/data/2.5/weather?q=';
  private APIKey = '5a4b2d457ecbef9eb2a71e480b947604';
  private foreCastAPI =
    'https://api.openweathermap.org/data/2.5/forecast/daily?zip=';
  constructor(private httpClient: HttpClient) {}

  addWeatherData(pincode: any): Observable<any> {
    let url =
      this.WeatherAPI + pincode + ',us&units=metric&appid=' + this.APIKey;
    return this.httpClient.get(url);
  }
  getForcastData(pincode: any): Observable<any> {
    let url =
      this.foreCastAPI +
      pincode +
      ',us&cnt=5&units=metric&appid=' +
      this.APIKey;
    return this.httpClient.get(url);
  }

  private wheatherImgs: any = {
    Clear: 'sun.png',
    Clouds: 'clouds.png',
    Rain: 'rain.png',
    Snow: 'snow.png'
  };

  getBaseWhetherImgPath(): string {
    return 'https://www.angulartraining.com/images/weather/';
  }
  getWheatherImgs(): any {
    return this.wheatherImgs;
  }
}
