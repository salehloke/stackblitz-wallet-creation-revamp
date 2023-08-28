import { CommonModule } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SalesBusinessPartnerComponent } from './sales-business-partner/sales-business-partner.component';
import { SalesConnectPartnerComponent } from './sales-connect-partner/sales-connect-partner.component';

@Component({
  selector: 'app-wallet-creation-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SalesConnectPartnerComponent,
    SalesBusinessPartnerComponent,
  ],
  templateUrl: './wallet-creation-form.component.html',
  styleUrls: ['./wallet-creation-form.component.css'],
})
export class WalletCreationFormComponent implements OnInit {
  @Input() isSalesConnectPartner = false;
  @Input() isSalesBusinessPartner = false;
  @Input() isSupplyPartner = false;

  @Input() isMainExists!: boolean;
  @Input() isFeeExists!: boolean;
  @Input() isBusinessExists!: boolean;

  /**
   * -wallet-creation-form
   * --sales-business-partner
   * ----sales-business-wallet-categories
   * --sales-connect-partner
   * ----sales-connect-wallet-categories
   * --supply-partner
   */

  constructor() {}

  ngOnInit() {}
}
