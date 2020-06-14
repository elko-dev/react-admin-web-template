import { action, observable } from 'mobx';
import * as firebase from 'firebase/app';
import { firebaseAuth } from '../config/auth.config';

export interface IAuthStore {
  isAuthorized: boolean;
  currentUser: firebase.User | null;
  setAuthState(): Promise<void>;
}

export class AuthStore implements IAuthStore {
  @observable public isAuthorized: boolean = false;
  @observable public currentUser: firebase.User | null =
    firebaseAuth.currentUser;

  @action setAuthState = async (): Promise<void> => {
    firebaseAuth.onAuthStateChanged((user: firebase.User | null) => {
      this.setAuthorization(user);
    });
  };

  private async setAuthorization(user: firebase.User | null): Promise<void> {
    if (user) {
      if (this.isUserVerified(user)) {
        this.isAuthorized = true;
        this.currentUser = user;
      } else {
        alert('User Email Not Verified.  Please do so before logging in.');
        firebaseAuth.signOut();
        this.currentUser = null;
      }
    } else {
      this.isAuthorized = false;
      this.currentUser = null;
    }
  }

  private isUserVerified(user: firebase.User) {
    return (
      user.providerData[0]!.providerId === 'facebook.com' || user.emailVerified
    );
  }
}
