import {Compiler, Component, ModuleWithComponentFactories, OnInit, ReflectiveInjector, ViewContainerRef} from '@angular/core';
import {DynamicModule} from './dynamic.module';
import {ToolbarComponent} from '../toolbar/toolbar.component';
import {SidenavComponent} from '../sidenav/sidenav.component';
import {GridComponent} from '../grid/grid.component';
import {CardComponent} from '../card/card.component';


@Component({
  selector: 'app-dynamic',
  template: ''
})
export class DynamicComponentRenderer implements OnInit {

  factory: ModuleWithComponentFactories<DynamicModule>;

  constructor(private vcRef: ViewContainerRef, private compiler: Compiler) {
  }

  ngOnInit() {
    if (!this.factory) {
      const dynamicComponents = {
        toolbar: {comp: ToolbarComponent, inputs: {name: 'Andrew Wiles'}},
        sidenav: {comp: SidenavComponent, inputs: {age: 30}}
      };
      this.compiler.compileModuleAndAllComponentsAsync(DynamicModule)
        .then((moduleWithComponentFactories: ModuleWithComponentFactories<DynamicModule>) => {
          this.factory = moduleWithComponentFactories;
          Object.keys(dynamicComponents).forEach(k => {
            this.add(dynamicComponents[k]);
          });
        });
    }
  }

  renderToolbar(config) {
    this.add({comp: ToolbarComponent, inputs: {toolbar: config}});
  }

  renderSideNav(config) {
    this.add({comp: SidenavComponent, inputs: {age: config}});
  }

  renderGrid(config) {
    this.add({comp: GridComponent, inputs: {age: config}});
  }

  renderCards(config) {
    this.add({comp: CardComponent, inputs: {age: config}});
  }

  renderTabs(config) {
    this.add({comp: SidenavComponent, inputs: {age: config}});
  }

  add(comp: any) {
    const compFactory = this.factory.componentFactories.find(x => x.componentType === comp.comp);
    // If we don't want to hold a reference to the component type, we can also say: const compFactory = this.factory.componentFactories.find(x => x.selector === 'my-component-selector');
    const injector = ReflectiveInjector.fromResolvedProviders([], this.vcRef.parentInjector);
    const cmpRef = this.vcRef.createComponent(compFactory, this.vcRef.length, injector, []);
    Object.keys(comp.inputs).forEach(i => cmpRef.instance[i] = comp.inputs[i]);
  }
}
