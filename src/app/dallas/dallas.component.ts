import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { TaskService } from './../task.service';

@Component({
  selector: 'app-burbank',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DallasComponent implements OnInit {
  weather = 'crack';
  constructor(private _TaskService: TaskService) { }

  ngOnInit() {
    this._TaskService.getCityInfo('dallas').subscribe(
      (response) => {
        this.weather = response.json();
      },
      (err) => {console.log(err);}
    );
  };

}
