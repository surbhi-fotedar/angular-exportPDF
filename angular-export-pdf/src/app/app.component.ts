import { Component } from '@angular/core';
import { InvoiceRow } from './invoice-row';
import { invoiceData } from './invoice-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public data: InvoiceRow[] = invoiceData;
}
