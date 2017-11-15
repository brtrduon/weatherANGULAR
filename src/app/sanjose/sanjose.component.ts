import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { TaskService } from './../task.service';

@Component({
  selector: 'app-burbank',
  templateUrl: './sanjose.component.html',
  styleUrls: ['./sanjose.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SanjoseComponent implements OnInit {
  weather = 'crack';
  constructor(private _TaskService: TaskService) { }

  ngOnInit() {
    this._TaskService.getCityInfo('san jose').subscribe(
      (response) => {
        this.weather = response.json();
      },
      (err) => {console.log(err);}
    );
  };

}
