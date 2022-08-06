import { CardBookComponent } from 'src/app/card/card-book/card-book.component';
import { DoughnutChartCardComponent } from './card/doughnut-chart-card/doughnut-chart-card.component';
import { DoughnutChartComponent } from 'src/app/doughnut-chart/doughnut-chart.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzInputModule } from 'ng-zorro-antd/input';
import { GridLayoutComponent } from './grid-layout/grid-layout.component'
import { GlobalLayoutComponent } from './global-layout/global-layout.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { ChartsModule } from "ng2-charts";

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    GlobalLayoutComponent,
    GridLayoutComponent,
    SearchbarComponent,
    CardBookComponent,
    DoughnutChartComponent,
    DoughnutChartCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzMenuModule,
    NzInputModule,
    NzGridModule,
    NzIconModule,
    NzDropDownModule,
    NzCardModule,
    NzDividerModule,
    ChartsModule
  ],
  // exports:[
  //   NzInputModule,
  // ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
