import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { StatusComponent } from './pages/status/status.component';
import { DeviceComponent } from './pages/device/device.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    StatusComponent,
    DeviceComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
