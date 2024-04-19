import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { SetAccessToken, SetAccount } from './account.actions';
import { Account } from './models/account';

export interface AccountStateModel {
  accessToken: string;
  account: Account | null;
}

@State<AccountStateModel>({
  name: 'account',
  defaults: {
    accessToken: '',
    account: null,
  },
})
@Injectable()
export class AccountState {
  @Selector()
  static getAccessToken(state: AccountStateModel) {
    return state.accessToken;
  }

  @Selector()
  static isAuthenticated(state: AccountStateModel) {
    return !!state.accessToken;
  }

  @Selector()
  static getAccount(state: AccountStateModel) {
    return state.account;
  }

  @Selector()
  static getFullName(state: AccountStateModel) {
    return `${state.account?.firstName} ${state.account?.lastName}`;
  }

  @Action(SetAccessToken)
  setAccessToken(
    { patchState }: StateContext<AccountStateModel>,
    { payload }: SetAccessToken,
  ) {
    patchState({ accessToken: payload });
  }

  @Action(SetAccount)
  setAccount(
    { patchState }: StateContext<AccountStateModel>,
    { payload }: SetAccount,
  ) {
    patchState({ account: payload });
  }
}
