import { inject } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';
import { finalize } from 'rxjs';

import { LoadingService } from './loading-service';

export const loadingIntercepter: HttpInterceptorFn = (req, next) => {
  const loadingService = inject(LoadingService);

  loadingService.increase();

  return next(req).pipe(
    finalize(() => {
      loadingService.decrease();
    }),
  );
};
