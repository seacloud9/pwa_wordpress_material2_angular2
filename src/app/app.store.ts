import { provideStore } from '@ngrx/store';
import { IAppState, IVrModule } from './shared/interfaces';
import { LogService } from './shared/services/log.service';
// Reducers
import { vrModuleReducer } from './shared/reducers/vr-module';

class AppStore implements IAppState {
  public vrModule: IVrModule;
  constructor(private logService: LogService) {
    this.logService.logEx(`Initialized`, 'AppStore');
  }
}


// Define App-Store
const appStore = provideStore(
                  {
                    vrModule: vrModuleReducer
                  },
                  {
                    vrModule: this.vrModule
                  });


export {
  appStore
}
