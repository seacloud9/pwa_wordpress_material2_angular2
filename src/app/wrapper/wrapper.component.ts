import { Component, ChangeDetectionStrategy, ChangeDetectorRef, ViewContainerRef, Injector } from '@angular/core';
// Routing
import { ActivatedRoute, Router } from '@angular/router';
import { AframeComponent } from './../aframe/aframe.component';

// RxJS (currently unused!)
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
// VR Module

// Services
import { LogService } from './../shared/services/log.service';
import {  VrModuleService } from './../shared/services/vr-module.service';
// Interfaces
import { IAppState, IVrModule, IVrModuleDescriptor } from './../shared/interfaces';
import * as _ from 'lodash';
// State Management with Redux
import '@ngrx/core/add/operator/select';
import { Store } from '@ngrx/store';
const template = require('./wrapper.component.html');
const style = require('./wrapper.component.scss');

@Component({
  selector: 'vr-wrapper',
  template: template,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Wrapper {
  public componentData:any = null;
  private src: string;
  private modules: Observable<IVrModule[]>;
  private availableModules: IVrModule[] = [];
  private vrScripts: string[] = [];
  private routeSubscription: Subscription;
  private modulesSubscription: Subscription;
  /**
   * Creates an instance of Wrapper.
   * This component is responsible for setting up the stage for vr modules.
   *
   * @param {Router} router
   * @param {ActivatedRoute} route
   * @param {ChangeDetectorRef} changeDetectorRef
   * @param {ViewContainerRef} viewContainerRef
   * @param {ComponentResolver} componentResolver
   * @param {Injector} injector
   * @param {LogService} logService
   * @param {VrModuleService} vrModuleService
   * @param {Store<IAppState>} store
   */
  constructor(private router: Router,
              private route: ActivatedRoute,
              private changeDetectorRef: ChangeDetectorRef,
              private logService: LogService,
              private store: Store<IAppState>) {
  }
  public ngOnInit() {
    this.initSubscriptions();
  }
  public ngAfterViewInit() {
  }
  public ngOnDestroy() {
    this.destroySubscriptions();
  }
  public ngOnChanges(changes: any) {
  }
  private initSubscriptions() {
   this.modules = this.store.select('vrModuleReducer');
   this.modulesSubscription = this.modules.subscribe(mods => this.availableModules = mods);
   this.routeSubscription = this.route.params.subscribe(params => {
      const id = params['id'];
      const mod = _.find(this.availableModules, _mod => _mod.id === id);
      this.src = mod ? mod.markup : undefined;
      this.vrScripts = mod ? mod.scripts : [];
      this.componentData = {
       component: AframeComponent,
       inputs: {
         html: this.src
       }
     }

      this.changeDetectorRef.markForCheck();



    });
  }
  private destroySubscriptions() {
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
    if (this.modulesSubscription) {
      this.modulesSubscription.unsubscribe();
    }
  }
}
