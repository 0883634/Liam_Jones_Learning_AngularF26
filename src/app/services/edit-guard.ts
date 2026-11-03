import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { GuardService } from './guard';

export const editGuard: CanActivateFn = () => {
  const guardService = inject(GuardService);
  const router = inject(Router);

  if (guardService.guardEnabled()) {
    return router.parseUrl('http://localhost:4200/games');
  }

  return true;
};
