import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { predefinedModules } from './app-loader';
import { Store } from '@ngrx/store';
// Services
import { LogService } from './shared/services/log.service';
import {  VrModuleService } from './shared/services/vr-module.service';
import { IAppState, IVrModule, ITask } from './shared/interfaces';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  //providers: [Store],
 // changeDetection: ChangeDetectionStrategy.OnPush
})


export class AppComponent {
  title = 'SeaCloud9 Blog';
  navOpen = false;
  private routeSubscription: Subscription;
  private moduleSubscription: Subscription;
  private availableModules: Observable<IVrModule[]>;
  private activeVrModule: IVrModule;

  constructor(
              private router: Router,
              private logService: LogService,
              private route: ActivatedRoute,
              private vrModuleService: VrModuleService,
              private store: Store<IAppState>,
              ) {
  }

  public ngOnInit() {
    this.logService.logEx(`Init`, 'App');
    this.availableModules = <Observable<IVrModule[]>>this.store.select('vrModuleReducer');
    this.initSubscriptions();
    this.registerVrModules(predefinedModules);
  }

  private initSubscriptions() {
    this.routeSubscription = this.route.params.subscribe(data => {
      this.logService.logJson(data, 'App');
    });
    this.moduleSubscription = this.vrModuleService.registerModule().subscribe(message => {
      this.logService.logEx(message.content, 'App');
    });
  }
  //registered correctly?
  private registerVrModules(modules: IVrModule[]) {
    _.each(modules, mod => this.vrModuleService.next(mod));
  }

}
