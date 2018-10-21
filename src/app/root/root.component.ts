import {Compiler, Component, OnInit, ViewContainerRef} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {
  public configuration;
  configUrl = 'https://jsonblob.com/api/jsonblob/e2043a43-d450-11e8-a940-8b3bc7da98ae';
  //factory: ModuleWithComponentFactories<DynamicModule>;

  constructor(private http: HttpClient, private vcRef: ViewContainerRef, private compiler: Compiler) {
  }

  ngOnInit() {
    this.getConfig();

  }

  private getConfig() {
    // @ts-ignore
    this.http.get(this.configUrl).subscribe(data => {
      console.log(data);
      if (data['toolbar']) {
        this.setupToolbar(data['toolbar']);
      }
    });
  }

  private setupToolbar(toolbar) {

  }
}
