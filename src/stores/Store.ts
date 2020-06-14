import { AuthStore } from './AuthStore';
import { UserStore } from './UserStore';

export const StoreNames = {
  AuthStore: 'authStore',
  UserStore: 'userStore',
};

export const Stores = {
  [StoreNames.AuthStore]: new AuthStore(),
  [StoreNames.UserStore]: new UserStore(),
};
