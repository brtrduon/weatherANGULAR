import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { TaskService } from './../task.service';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BurbankComponent implements OnInit {
  weather = 'crack';
  constructor(private _TaskService: TaskService) { }

  ngOnInit() {
    this._TaskService.getCityInfo('burbank').subscribe(
      (response) => {
        this.weather = response.json();
      },
      (err) => {console.log(err);}
    );
  };

}
