import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { ContactFormModel } from './contact-form.model';
import { TypedFormExampleHelper } from './form-helper';

@Component({
  selector: 'app-typed-form-example',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './typed-form-example.component.html',
  styleUrls: ['./typed-form-example.component.css'],
})
export class TypedFormExampleComponent implements OnInit {
  typedExampleForm: FormGroup<ContactFormModel> =
    new FormGroup<ContactFormModel>({
      age: new FormControl(0),
      name: new FormControl<string>(''),
    });

  constructor() {}

  ngOnInit() {}
}
