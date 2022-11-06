import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeModule } from './modules/home/home.module';
import { PoolsModule } from './modules/pools/pools.module';
import { SigninModule } from './modules/signin/signin.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    CoreModule,
    AppRoutingModule,
    SharedModule,
    HomeModule,
    SigninModule,
    PoolsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
