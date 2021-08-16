import { Service } from '../Models/service.model';
import { createAction, props } from '@ngrx/store';

export const ADD_Service_ACTION = '[services page] add service';
export const ADD_Service_SUCCESS = '[services page] add service success';

export const addService = createAction(ADD_Service_ACTION, props<{ Service: Service }>());
export const addServiceSuccess = createAction(
  ADD_Service_SUCCESS,
  props<{ Service: Service }>()
);