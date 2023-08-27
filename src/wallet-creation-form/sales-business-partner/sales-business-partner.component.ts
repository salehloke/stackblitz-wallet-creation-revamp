import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { tap } from 'rxjs';

@Component({
  selector: 'app-sales-business-partner',

  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './sales-business-partner.component.html',
  styleUrls: ['./sales-business-partner.component.css'],
})
export class SalesBusinessPartnerComponent implements OnInit {
  salesBusinessFormGroup = new FormGroup({});

  constructor() {}

  ngOnInit() {}
}
