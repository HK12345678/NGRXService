import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRosterServiceComponent } from './add-roster-service.component';

describe('AddRosterServiceComponent', () => {
  let component: AddRosterServiceComponent;
  let fixture: ComponentFixture<AddRosterServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRosterServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRosterServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
