import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { TaskService } from './../task.service';

@Component({
  selector: 'app-burbank',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ChicagoComponent implements OnInit {
  weather = 'crack';
  constructor(private _TaskService: TaskService) { }

  ngOnInit() {
    this._TaskService.getCityInfo('chicago').subscribe(
      (response) => {
        this.weather = response.json();
      },
      (err) => {console.log(err);}
    );
  };

}
