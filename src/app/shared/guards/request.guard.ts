import { CanActivateFn } from '@angular/router';

export const requestGuard: CanActivateFn = (route, state) => {
  return true;
};
