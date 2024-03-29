import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { BusPointType } from '@modules/buspoint-types/models/buspoint-type.model';
import { BusPointTypeStoreService } from '@modules/buspoint-types/services/buspoint-type-store/buspoint-type-store.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-buspoint-type-dialog',
  templateUrl: './buspoint-type-dialog.component.html',
  styleUrls: ['./buspoint-type-dialog.component.scss'],
})
export class BusPointTypeDialogComponent implements OnInit {
  loading$: Observable<boolean>;
  busPointTypeForm: FormGroup;
  busPointType?: BusPointType;

  formId = 'busPointTypeForm';

  constructor(
    private busPointTypeStoreService: BusPointTypeStoreService,
    private bsModalRef: BsModalRef,
  ) {
    this.loading$ = busPointTypeStoreService.loading.value$;
  }

  get name(): AbstractControl {
    return this.busPointTypeForm.get('name');
  }

  ngOnInit(): void {
    this.busPointTypeForm = new FormGroup({
      name: new FormControl(this.busPointType?.name ?? '', [
        // eslint-disable-next-line @typescript-eslint/unbound-method
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(45),
        Validators.pattern(
          '^(?![_.])(?!.*[_.]{2})([а-яА-Яa-zA-Z0-9._]+ )*[а-яА-Яa-zA-Z0-9._]+(?<![_.])$',
        ),
      ]),
    });
  }

  onSubmitBusPointType(): void {
    if (!this.busPointTypeForm.valid) return;

    if (this.busPointType != null) {
      this.busPointTypeStoreService.edit(
        this.busPointType.href,
        this.busPointTypeForm.value,
      );
      this.bsModalRef?.hide();
      return;
    }
    this.busPointTypeStoreService.create(this.busPointTypeForm.value);
    this.bsModalRef?.hide();
  }

  onDeclineBtnClick(): void {
    this.bsModalRef?.hide();
    // this.declineBtnClick?.emit();
  }
}
