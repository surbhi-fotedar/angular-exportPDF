import { Component, Input } from '@angular/core';
import { aggregateBy } from '@progress/kendo-data-query';
import { InvoiceRow } from '../invoice-row';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent {

  @Input()
  public data: InvoiceRow[] = [];

  private aggregates: any[] = [{
    field: 'qty', aggregate: 'sum'
  }, {
    field: 'total', aggregate: 'sum'
  }];

  public get totals(): any {
    return aggregateBy(this.data, this.aggregates) || {};
  }

}
