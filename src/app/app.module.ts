import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
        WelcomeComponent,
        TrendingThumbnailComponent,
        DetailsPageComponent,
        ShopService,
        FlixListResolver,
        FlixRouteActivator,
        LikeComponent,
        ConvertToSpacesPipe

} from './HomeFolder/index';
import { AOSAppComponent } from './aos-app.component';
import { NavBarComponent } from './nav/nav-bar.component';
import { FooterComponent } from './footer/app-footer.component'
import { Error404Component } from './errors/404.component';
import { CollapsibleWellComponent } from './common/collapsible-well.component';
import { SimpleModalComponent } from './common/simple-modal.component';
import { appRoutes } from './routes';
import { JQ_TOKEN } from './common/jQuery.service';
import { ModalTriggerDirective } from './common/modal-trigger.directive';
import { StarComponent } from './common/star.component';
import { AddRemoveItemComponent } from './common/add-remove-item.component';
import { AuthService } from './user/auth.service';

const jQuery = window['$'];
@NgModule({
  declarations: [
   AOSAppComponent,
   WelcomeComponent,
    TrendingThumbnailComponent,
    FooterComponent,
    DetailsPageComponent,
    NavBarComponent,
    ModalTriggerDirective,
    Error404Component,
    CollapsibleWellComponent,
    SimpleModalComponent,
    LikeComponent,
    StarComponent,
    AddRemoveItemComponent,
    ConvertToSpacesPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    ShopService,
    FlixRouteActivator,
    FlixListResolver,
    AuthService,
    { provide: JQ_TOKEN, useValue: jQuery }
  ],
  exports: [LikeComponent],

  bootstrap: [AOSAppComponent]
})
export class AppModule { }
