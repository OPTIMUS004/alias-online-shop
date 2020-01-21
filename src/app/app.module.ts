import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
        WelcomeComponent,
        ProductDetailsComponent,
        ProductComponent,
        ShopService,
        ConvertToSpacesPipe

} from './HomeFolder/index';
import { TrendingThumbnailComponent } from './HomeFolder/trending-products/trending-thumbnail.component'
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
    ProductDetailsComponent,
    ProductComponent,
    NavBarComponent,
    ModalTriggerDirective,
    Error404Component,
    CollapsibleWellComponent,
    SimpleModalComponent,
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
    AuthService,
    { provide: JQ_TOKEN, useValue: jQuery }
  ],

  bootstrap: [AOSAppComponent]
})
export class AppModule { }
