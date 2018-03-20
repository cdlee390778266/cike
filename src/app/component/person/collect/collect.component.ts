import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-collect',
  templateUrl: './collect.component.html',
  styleUrls: ['./collect.component.css']
})
export class CollectComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  private nav: any = 0;

  changeNav(nav) {
      if(nav != this.nav) {
          this.nav = nav;
      }
  }

  ngOnInit() {
      this.nav = this.route.snapshot.paramMap.get('id') ? this.route.snapshot.paramMap.get('id') : 0;
  }

}
