import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoadingComponent } from './component/loading/loading.component';
import { ThemeComponent } from './component/theme/theme.component';
import { LoginComponent } from './component/login/login.component';
import { TloginComponent } from './component/tlogin/tlogin.component';
import { RegisterComponent } from './component/register/register.component';
import { AgreementComponent } from './component/agreement/agreement.component';
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
import { IntroduceComponent } from './component/service/introduce/introduce.component';
import { ForgetComponent } from './component/forget/forget.component';
import { GalleryDetailComponent } from './component/person/gallery-detail/gallery-detail.component';
import { CreateGalleryComponent } from './component/person/create-gallery/create-gallery.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'guide', component: LoadingComponent},
    { path: 'home', component: HomeComponent},
    { path: 'theme', component: ThemeComponent},
    { path: 'login', component: LoginComponent},
    { path: 'tlogin', component: TloginComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'agreement', component: AgreementComponent},
    { path: 'upload', component: UploadComponent},
    { path: 'person', redirectTo: 'person/index', pathMatch: 'full' },
    { path: 'person/index', component: IndexComponent},
    { path: 'person/user', component: UserComponent},
    { path: 'person/theme/:id', component: PersonThemeComponent},
    { path: 'person/vip', component: VipComponent},
    { path: 'person/message', component: MessageComponent},
    { path: 'person/zan', component: ZanComponent},
    { path: 'person/clist', component: CommentListComponent},
    { path: 'person/cdetail/:id', component: CommentDetailComponent},
    { path: 'person/collect/:id', component: CollectComponent},
    { path: 'person/gallery', component: GalleryComponent},
    { path: 'person/gallerydetail/:id', component: GalleryDetailComponent},
    { path: 'person/creategallery', component: CreateGalleryComponent},
    { path: 'person/record', component: RecordComponent},
    { path: 'person/trade', component: TradeComponent},
    { path: 'person/config', component: ConfigComponent},
    { path: 'person/aboutus', component: AboutusComponent},
    { path: 'person/safe', component: SafeComponent},
    { path: 'service', redirectTo: 'service/home', pathMatch: 'full' },
    { path: 'service/home', component: ServiceHomeComponent},
    { path: 'service/manager', component: ManagerComponent},
    { path: 'service/buy', component: BuyComponent},
    { path: 'service/proposal', component: ProposalComponent},
    { path: 'service/contact', component: ContactComponent},
    { path: 'service/introduce', component: IntroduceComponent},
    { path: 'forget', component: ForgetComponent},
    { path: '**', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
