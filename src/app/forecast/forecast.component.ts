import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WeatherService } from './../services/weather.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  pincode: string = '';
  forecastData = { city: '', cod: '', message: 0, cnt: 40, list: [] };

  baseWheatherImgPath: string;
  wheatherImg: any;

  constructor(
    private router: Router,
    private arouter: ActivatedRoute,
    private ws: WeatherService
  ) {
    this.baseWheatherImgPath = this.ws.getBaseWhetherImgPath();
    this.wheatherImg = this.ws.getWheatherImgs();
  }

  ngOnInit() {
    this.arouter.params.subscribe(params => {
      this.pincode = params['id'];
      if (this.pincode != '' && this.pincode != null) {
        this.addForecastData(this.pincode);
      }
    });
  }
  goBackWeather() {
    this.router.navigateByUrl('');
  }
  dateConverter(miliseconds) {
    return new Date(miliseconds * 1000);
  }
  addForecastData(pincode) {
    this.ws.getForcastData(pincode).subscribe(
      result => {
        console.log(this.pincode);
        this.forecastData = result;
      },
      error => {
        console.log('error', error);
        alert('Data  not found try with other Pincode');
      }
    );
  }
}
