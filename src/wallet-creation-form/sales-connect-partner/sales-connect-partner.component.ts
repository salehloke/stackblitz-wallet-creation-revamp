import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  AfterViewChecked,
  ChangeDetectorRef,
} from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { tap } from 'rxjs';

@Component({
  selector: 'app-sales-connect-partner',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './sales-connect-partner.component.html',
  styleUrls: ['./sales-connect-partner.component.css'],
})
export class SalesConnectPartnerComponent
  implements OnInit, AfterViewInit, AfterViewChecked
{
  @Input() requisitionDetails: any;
  @Input() isMainExists!: boolean;
  @Input() isFeeExists!: boolean;

  salesConnectFormGroup: FormGroup<SalesConnectFormModel> =
    new FormGroup<SalesConnectFormModel>({
      isMain: new FormControl<boolean>(false),
      isFee: new FormControl<boolean>(false),
      walletCategoryCode: new FormControl<number>(0),
    });

  constructor(private readonly changeDetectorRef: ChangeDetectorRef) {}

  ngAfterViewChecked(): void {
    this.changeDetectorRef.detectChanges();
  }

  ngAfterViewInit() {
    if (this.isMainExists) {
      this.f.isMain.disable({ emitEvent: false });
    }
    if (this.isFeeExists) {
      this.f.isFee.disable({ emitEvent: false });
    }
  }

  ngOnInit() {
    this.salesConnectFormGroup.valueChanges
      .pipe(
        tap((value) => {
          // do first side effect here
          console.log('sideEffect1');

          const isMain: boolean = value?.isMain ?? false;
          const isFee: boolean = value?.isFee ?? false;
          const walletCategoryCode = this.getWalletCategoryCode(isMain, isFee);

          this.salesConnectFormGroup.controls.walletCategoryCode.setValue(
            walletCategoryCode,
            { emitEvent: false }
          );
        }),
        tap(() => {
          // do second sideeffects here
          console.log('sideEffect2');
        })
      )
      .subscribe((value) => {
        const isMain: boolean = value?.isMain ?? false;
        const isFee: boolean = value?.isFee ?? false;
        const walletCategoryCode = this.getWalletCategoryCode(isMain, isFee);
        console.log(walletCategoryCode);
      });
  }

  getWalletCategoryCode(isMain: boolean, isFee: boolean) {
    switch (true) {
      case isMain && isFee:
        return 2;
      case isMain:
        return 1;
      case isFee:
        return 3;
      default:
        // neither is checked
        return 0;
    }
  }

  get f() {
    return this.salesConnectFormGroup.controls;
  }
}

export interface SalesConnectFormModel {
  isMain: AbstractControl<boolean | null>;
  isFee: AbstractControl<boolean | null>;
  walletCategoryCode: AbstractControl<number | null>;
}
