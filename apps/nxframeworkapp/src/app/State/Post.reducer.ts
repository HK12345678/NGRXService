import {
    addService
  } from './Post.action';
  import { Action, createReducer, on } from '@ngrx/store';
  import { initialState, servicesAdapter, ServiceState } from './Post.state';
import { Service } from '../Models/service.model';

  const _postsReducer = createReducer(
    initialState,
    on(addService, (state, action) => {
      return servicesAdapter.addOne(action.Service, {
        ...state,
        count: state.count + 1,
      });
    }),
  );

  export function postsReducer(state: ServiceState, action: Action) {
    return _postsReducer(state, action);
  }
  