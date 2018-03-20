import { Component, OnInit } from '@angular/core';
import { slideInDownAnimation } from '../../../animations';

@Component({
  selector: 'app-service-home',
  templateUrl: './service-home.component.html',
  styleUrls: ['../../../app.css', '../../../../assets/bootstrap/css/bootstrap.min.css'],
  animations: [slideInDownAnimation]
})
export class ServiceHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
