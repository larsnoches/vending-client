import { Injectable, Injector } from '@angular/core';
import {
  BasicBusTripRequestDto as Req,
  GetBusTripResponseDto as Resp,
} from '@modules/bustrips/models/bustrip.model';
import { catchError, retry, tap } from 'rxjs';
import { Pageable } from '@helpers/page-data';
import { StoreService } from '@helpers/store.service';
import { config } from '@helpers/config';

@Injectable({
  providedIn: 'root',
})
export class BusTripStoreService extends StoreService<Req, Resp> {
  bustripApiUrl = `${config.apiPath}/busTrips`;

  constructor(protected injector: Injector) {
    super(injector);
    super.apiUrl = this.bustripApiUrl;
  }

  getListByCarrierId(carrierId: number, pageNumber?: number | null): void {
    const listUtl = `${this.bustripApiUrl}/carrier/${carrierId}`;
    const params = {
      page: pageNumber ?? 0,
      size: this.pageData.value.size,
      sort: 'id',
    };

    this.http
      .get<Pageable<Resp>>(listUtl, { params })
      .pipe(
        tap(() => (this.loading.value = true)),
        retry(3),
        catchError(er => {
          this.loading.value = false;
          return this.handleError(er);
        }),
        tap(() => (this.loading.value = false)),
      )
      .subscribe({
        next: data => super.updateListAndPageData(data),
        complete: () => (this.loading.value = false),
      });
  }
}
