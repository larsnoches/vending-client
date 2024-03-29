import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BusPointTypeConfirmComponent } from './components/buspoint-type-confirm/buspoint-type-confirm.component';
import { BusPointTypeDialogComponent } from './components/buspoint-type-dialog/buspoint-type-dialog.component';
import { BusPointTypeListComponent } from './components/buspoint-type-list/buspoint-type-list.component';
import { BusPointTypeStoreService } from './services/buspoint-type-store/buspoint-type-store.service';
import { BusPointTypesPageComponent } from './components/buspoint-types-page/buspoint-types-page.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgModule } from '@angular/core';
import { SharedModule } from '@modules/shared/shared.module';

@NgModule({
  declarations: [
    BusPointTypeListComponent,
    BusPointTypesPageComponent,
    BusPointTypeDialogComponent,
    BusPointTypeConfirmComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule,
    ModalModule.forRoot(),
  ],
  providers: [BusPointTypeStoreService],
  exports: [BusPointTypesPageComponent],
})
export class BusPointTypesModule {}
