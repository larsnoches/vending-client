import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BusPointTypeFormComponent } from './components/buspoint-type-form/buspoint-type-form.component';
import { BusPointTypeItemComponent } from './components/buspoint-type-item/buspoint-type-item.component';
import { BusPointTypeListComponent } from './components/buspoint-type-list/buspoint-type-list.component';
import { BusPointTypeStoreService } from './services/buspoint-type-store/buspoint-type-store.service';
import { BusPointTypesPageComponent } from './components/buspoint-types-page/buspoint-types-page.component';
import { BuspointTypeDialogComponent } from './components/buspoint-type-dialog/buspoint-type-dialog.component';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgModule } from '@angular/core';
import { SharedModule } from '@modules/shared/shared.module';

@NgModule({
  declarations: [
    BusPointTypeListComponent,
    BusPointTypeItemComponent,
    BusPointTypeFormComponent,
    BusPointTypesPageComponent,
    BuspointTypeDialogComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    ModalModule.forRoot(),
  ],
  providers: [BusPointTypeStoreService],
  exports: [BusPointTypesPageComponent],
})
export class BusPointTypesModule {}
