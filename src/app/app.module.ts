import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RootComponent} from './root/root.component';
import {HttpClientModule} from '@angular/common/http';
import {DynamicComponentRenderer} from './renderer/render.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SidenavService} from './sidenav/sidenav.service';

@NgModule({
  declarations: [
    RootComponent,
    DynamicComponentRenderer
  ],
  imports: [BrowserAnimationsModule,
    HttpClientModule, BrowserModule
  ],providers: [
    SidenavService
  ],
  bootstrap: [RootComponent]
})
export class AppModule {
}
