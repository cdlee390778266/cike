import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule }    from '@angular/common/http';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { FormsModule }   from '@angular/forms';


import { AppComponent } from './app.component';
import { FootComponent } from './component/common/foot/foot.component';
import { HomeComponent } from './component/home/home.component';
import { LoadingComponent } from './component/loading/loading.component';
import { ThemeComponent } from './component/theme/theme.component';
import { LoginComponent } from './component/login/login.component';
import { TloginComponent } from './component/tlogin/tlogin.component';
import { RegisterComponent } from './component/register/register.component';
import { AgreementComponent } from './component/agreement/agreement.component';
import { NavBarComponent } from './component/common/nav-bar/nav-bar.component';
import { UserComponent } from './component/person/user/user.component';
import { UploadComponent } from './component/upload/upload.component';
import { IndexComponent } from './component/person/index/index.component';
import { PersonThemeComponent } from './component/person/person-theme/person-theme.component';
import { VipComponent } from './component/person/vip/vip.component';
import { MessageComponent } from './component/person/message/message.component';
import { ZanComponent } from './component/person/zan/zan.component';
import { CommentListComponent } from './component/person/comment-list/comment-list.component';
import { CommentDetailComponent } from './component/person/comment-detail/comment-detail.component';
import { CollectComponent } from './component/person/collect/collect.component';
import { GalleryComponent } from './component/person/gallery/gallery.component';
import { RecordComponent } from './component/person/record/record.component';
import { TradeComponent } from './component/person/trade/trade.component';
import { ConfigComponent } from './component/person/config/config.component';
import { AboutusComponent } from './component/person/aboutus/aboutus.component';
import { SafeComponent } from './component/person/safe/safe.component';
import { ServiceHomeComponent } from './component/service/service-home/service-home.component';
import { ManagerComponent } from './component/service/manager/manager.component';
import { BuyComponent } from './component/service/buy/buy.component';
import { ProposalComponent } from './component/service/proposal/proposal.component';
import { ContactComponent } from './component/service/contact/contact.component';
import { ForgetComponent } from './component/forget/forget.component';
import { GalleryDetailComponent } from './component/person/gallery-detail/gallery-detail.component';
import { CreateGalleryComponent } from './component/person/create-gallery/create-gallery.component';
import { IntroduceComponent } from './component/service/introduce/introduce.component';

import { DataService } from './service/data.service'


@NgModule({
  declarations: [
    AppComponent,
    FootComponent,
    HomeComponent,
    LoadingComponent,
    ThemeComponent,
    LoginComponent,
    NavBarComponent,
    UserComponent,
    UploadComponent,
    IndexComponent,
    PersonThemeComponent,
    VipComponent,
    MessageComponent,
    ZanComponent,
    CommentListComponent,
    CommentDetailComponent,
    CollectComponent,
    GalleryComponent,
    RecordComponent,
    TradeComponent,
    ConfigComponent,
    AboutusComponent,
    SafeComponent,
    ServiceHomeComponent,
    ManagerComponent,
    BuyComponent,
    ProposalComponent,
    ContactComponent,
    ForgetComponent,
    GalleryDetailComponent,
    CreateGalleryComponent,
    RegisterComponent,
    AgreementComponent,
    TloginComponent,
    IntroduceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    OwlDateTimeModule, OwlNativeDateTimeModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})  
export class AppModule { }
