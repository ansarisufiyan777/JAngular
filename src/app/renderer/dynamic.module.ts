import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ToolbarComponent} from '../toolbar/toolbar.component';
import {SidenavComponent} from '../sidenav/sidenav.component';
import {GridComponent} from '../grid/grid.component';
import {CardComponent} from '../card/card.component';
import {TabsComponent} from '../tabs/tabs.component';
import {MaterialAppModule} from '../material.component';

@NgModule({
  imports: [
    BrowserModule,
    MaterialAppModule],
  declarations: [ToolbarComponent, SidenavComponent, GridComponent, CardComponent, TabsComponent]
})

export class DynamicModule {
}
