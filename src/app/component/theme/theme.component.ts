import { Component, OnInit } from '@angular/core';
import { slideInDownAnimation } from '../../animations';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css'],
  animations: [ slideInDownAnimation ]
})
export class ThemeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
