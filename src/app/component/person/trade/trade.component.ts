import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trade',
  templateUrl: './trade.component.html',
  styleUrls: ['./trade.component.css']
})
export class TradeComponent implements OnInit {

  constructor() { }

  private nav: number = 0;

  changeNav(nav) {
      this.nav = nav;
  }

  ngOnInit() {
  }

}
