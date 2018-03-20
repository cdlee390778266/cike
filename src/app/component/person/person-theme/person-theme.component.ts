import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-person-theme',
  templateUrl: './person-theme.component.html',
  styleUrls: ['../../../app.css', '../../../../assets/bootstrap/css/bootstrap.min.css']
})
export class PersonThemeComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  private nav: any;

  changeNav(nav) {
      this.nav = nav;
  }

  ngOnInit() {
      this.nav = this.route.snapshot.paramMap.get('id');
  }

}
