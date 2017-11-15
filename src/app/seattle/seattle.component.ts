import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { TaskService } from './../task.service';

@Component({
  selector: 'app-burbank',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SeattleComponent implements OnInit {
  weather = 'crack';
  constructor(private _TaskService: TaskService) { }

  ngOnInit() {
    this._TaskService.getCityInfo('seattle').subscribe(
      (response) => {
        this.weather = response.json();
      },
      (err) => {console.log(err);}
    );
  };
}
