import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { AppStoreModule } from '../store/store.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    AppStoreModule,
  ],
  exports: [],
  providers: [],

})
export class CoreModule {}
