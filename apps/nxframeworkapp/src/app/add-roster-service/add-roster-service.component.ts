import { addService } from './../State/Post.action';
import { Service } from './../Models/service.model';
import { FormGroup,FormBuilder, FormControl, Validators, ReactiveFormsModule  } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
//import { AppState } from 'src/app/store/app.state';
import { ServiceState } from '../State/Post.state';


@Component({
  selector: 'nxframework-add-roster-service',
  templateUrl: './add-roster-service.component.html',
  styleUrls: ['./add-roster-service.component.css']
})

export class AddRosterServiceComponent implements OnInit {
  postForm: FormGroup;

  constructor(private store: Store<ServiceState>) {}

  ngOnInit(): void {
  }
  onAddService() {
      if (!this.postForm.valid) {
        return;
      }

      const Service: Service = {
        ServiceType: this.postForm.value.ServiceType,
           };

      this.store.dispatch(addService({ Service }));
    }
  };



