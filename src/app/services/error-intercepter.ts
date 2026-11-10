import { inject } from '@angular/core';
import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { ErrorService } from './error-service';

export const ErrorIntercepter: HttpInterceptorFn = (req, next) => {
  const errorService = inject(ErrorService);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 0) {
        errorService.setMessage('Network error.');
      } else if (error.status === 404) {
        errorService.setMessage('Resource not found.');
      } else if (error.status >= 500) {
        errorService.setMessage('Server error.');
      }

      return throwError(() => error);
    }),
  );
};
