import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class TaskService {
  weather = {
    humidity:0,
    temp:0,
    maxTemp:0,
    minTemp:0,
    status:''
  };

  constructor(private _http: Http) { }
    getCityInfo(city) {
      return this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=`+city+`&units=imperial&appid=a9f1edac10b49388554c1c3020b76fe3`);
    };
}
