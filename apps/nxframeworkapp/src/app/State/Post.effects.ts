import { Store } from '@ngrx/store';
import {
  map,
  mergeMap,
} from 'rxjs/operators';
import {
  addService,
  addServiceSuccess
} from './Post.action';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { ServiceState } from './Post.state';
import { RServicesService } from '../Service';

@Injectable()
export class ServicessEffects {
  constructor(
    private actions$: Actions,
    private rServicesService: RServicesService,
    private store: Store<ServiceState>
  ) {}

  
  addService$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addService),
      mergeMap((action) => {
        return this.rServicesService.addService(action.Service).pipe(
          map((data) => {
            const Service = { ...action.Service, service: data.serviceType};
            return addServiceSuccess({ Service });
          })
        );
      })
    );
  });
}

