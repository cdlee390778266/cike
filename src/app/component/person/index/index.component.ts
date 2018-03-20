import { Component, OnInit } from '@angular/core';
import { slideInDownAnimation } from '../../../animations';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['../../../app.css', '../../../../assets/bootstrap/css/bootstrap.min.css'],
  animations: [slideInDownAnimation]
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
