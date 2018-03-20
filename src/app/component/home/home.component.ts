import { Component, OnInit} from '@angular/core';
import { slideInDownAnimation } from '../../animations';
import { DataService } from '../../service/data.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [ slideInDownAnimation ],
  providers: []
})
export class HomeComponent implements OnInit {
  constructor(private mhomeData: DataService) { }

  private isShowAd = true
  private selectDate = new Date();

  private homeData = [
      {
          categoryName: '最新',
          isActive: true,
          categoryData: [
              {
                 poster: '李木子',
                 address: '成都.芷泉街',
                 category: '故事',
                 src: 'https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=c01d6e9caa1ea8d395227204a70b30cf/43a7d933c895d1435eac3d047ff082025aaf073b.jpg',
                 album: 14,
                 time: '10-02-2015 12:00',
                 zanNum: 100,
                 isZan: true,
                 isCollected: true
              },
              {
                 poster: '李木子',
                 address: '成都.芷泉街',
                 category: '故事',
                 src: 'https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=c01d6e9caa1ea8d395227204a70b30cf/43a7d933c895d1435eac3d047ff082025aaf073b.jpg',
                 album: 14,
                 time: '10-02-2015 12:00',
                 zanNum: 100,
                 isZan: false,
                 isCollected: false
              },
              {
                 poster: '李木子',
                 address: '成都.芷泉街',
                 category: '故事',
                 src: 'https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=c01d6e9caa1ea8d395227204a70b30cf/43a7d933c895d1435eac3d047ff082025aaf073b.jpg',
                 album: 14,
                 time: '10-02-2015 12:00',
                 zanNum: 100,
                 isZan: false,
                 isCollected: false
              }
          ]
      },
      {
          categoryName: '热门',
          isActive: false,
          categoryData: [
              {
                 poster: '李木子',
                 address: '成都.芷泉街',
                 category: '故事',
                 src: 'https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=c01d6e9caa1ea8d395227204a70b30cf/43a7d933c895d1435eac3d047ff082025aaf073b.jpg',
                 album: 14,
                 time: '10-02-2015 12:00',
                 zanNum: 100,
                 isZan: false,
                 isCollected: true
              },
              {
                 poster: '李木子',
                 address: '成都.芷泉街',
                 category: '故事',
                 src: 'https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=c01d6e9caa1ea8d395227204a70b30cf/43a7d933c895d1435eac3d047ff082025aaf073b.jpg',
                 album: 14,
                 time: '10-02-2015 12:00',
                 zanNum: 100,
                 isZan: false,
                 isCollected: false
              }
          ]
      },
      {
          categoryName: '推荐',
          isActive: false,
          categoryData: [
              {
                 poster: '李木子',
                 address: '成都.芷泉街',
                 category: '故事',
                 src: 'https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=c01d6e9caa1ea8d395227204a70b30cf/43a7d933c895d1435eac3d047ff082025aaf073b.jpg',
                 album: 14,
                 time: '10-02-2015 12:00',
                 zanNum: 100,
                 isZan: false,
                 isCollected: false
              },
              {
                 poster: '李木子',
                 address: '成都.芷泉街',
                 category: '故事',
                 src: 'https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=c01d6e9caa1ea8d395227204a70b30cf/43a7d933c895d1435eac3d047ff082025aaf073b.jpg',
                 album: 14,
                 time: '10-02-2015 12:00',
                 zanNum: 100,
                 isZan: false,
                 isCollected: true
              },
              {
                 poster: '李木子',
                 address: '成都.芷泉街',
                 category: '故事',
                 src: 'https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=c01d6e9caa1ea8d395227204a70b30cf/43a7d933c895d1435eac3d047ff082025aaf073b.jpg',
                 album: 14,
                 time: '10-02-2015 12:00',
                 zanNum: 100,
                 isZan: false,
                 isCollected: false
              },
              {
                 poster: '李木子',
                 address: '成都.芷泉街',
                 category: '故事',
                 src: 'https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=c01d6e9caa1ea8d395227204a70b30cf/43a7d933c895d1435eac3d047ff082025aaf073b.jpg',
                 album: 14,
                 time: '10-02-2015 12:00',
                 zanNum: 100,
                 isZan: false,
                 isCollected: false
              },
              {
                 poster: '李木子',
                 address: '成都.芷泉街',
                 category: '故事',
                 src: 'https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=c01d6e9caa1ea8d395227204a70b30cf/43a7d933c895d1435eac3d047ff082025aaf073b.jpg',
                 album: 14,
                 time: '10-02-2015 12:00',
                 zanNum: 100,
                 isZan: false,
                 isCollected: false
              }
          ]
      }
  ]

  refreshDate() {
    console.log('you close date')
  }

  checkCategory(item) {
      if(item.isActive) return
      for(let i = 0; i < this.homeData.length; i++) {
          this.homeData[i].isActive = false;
      }
      item.isActive = true;
  }

 removeAd() {
      this.isShowAd = false;
  }

  changeZan(mes) {
      mes.isZan = !mes.isZan;
  }

  changeCollect(mes) {
      mes.isCollected = !mes.isCollected;
  }




  ngOnInit() {
    this.mhomeData.getDada('http://www.baidu.com').subscribe(res => console.log(res))
  }

}
