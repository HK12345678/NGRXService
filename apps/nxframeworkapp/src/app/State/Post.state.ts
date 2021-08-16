import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { Service } from './../Models/service.model';

export interface ServiceState extends EntityState<Service> {
  count: number;
}

export const servicesAdapter = createEntityAdapter<Service>({
  sortComparer: sortByName,
});

export const initialState: ServiceState = servicesAdapter.getInitialState({
  count: 0,
});

export function sortByName(a: Service, b: Service): number {
    return 1;
}
