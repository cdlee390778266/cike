import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-gallery-detail',
  templateUrl: './gallery-detail.component.html',
  styleUrls: ['../../../app.css', '../../../../assets/bootstrap/css/bootstrap.min.css']
})
export class GalleryDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  private nav: any = 0;

  ngOnInit() {
      this.nav = this.route.snapshot.paramMap.get('id') ? this.route.snapshot.paramMap.get('id') : 0;
      console.log(this.nav)
  }

}
