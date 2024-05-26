import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { AccountState } from '../account.state';

export const isAuthenticatedGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const store = inject(Store);

  if (store.selectSnapshot(AccountState.isAuthenticated)) {
    return true;
  }

  router.navigate(['/account/login'], {
    queryParams: { redirectUrl: state.url },
  });
  return false;
};
