import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PDFExportModule } from '@progress/kendo-angular-pdf-export';
import { IntlModule } from '@progress/kendo-angular-intl';
import { GridModule } from '@progress/kendo-angular-grid';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvoiceComponent } from './invoice/invoice.component';

@NgModule({
  declarations: [
    AppComponent,
    InvoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IntlModule,
    GridModule,
    PDFExportModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
