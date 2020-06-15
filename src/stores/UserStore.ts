import { User } from '../models/User';
import { observable, computed, action } from 'mobx';
import { UserService } from 'service/UserService';
import { firebaseAuth } from 'config/auth.config';

export class UserStore {
  private userService: UserService = new UserService();

  @observable public _user: User | null = null;

  @computed
  public get user(): User | null {
    return this._user;
  }

  @action
  public async googleLogin() {
    throw new Error('Not implemented yet');
  }

  @action
  public async getCurrentUser(authUser?: firebase.User): Promise<void> {
    let existingUser: User | null = null;
    if (authUser) {
      existingUser = await this.userService.getAuthenticatedUser(authUser);
    }
    if (existingUser === null && authUser) {
      const newUser: User | null = await this.userService.signUpAuthUser(
        authUser.email!,
        authUser.displayName!,
        '',
        authUser.uid,
        authUser.phoneNumber
      );
      this._user = newUser;
    } else {
      this._user = existingUser;
    }
  }

  @action
  public async login(email: string, password: string): Promise<User> {
    await firebaseAuth.signInWithEmailAndPassword(email, password);

    const user = await this.userService.getAuthenticatedUser(
      firebaseAuth.currentUser!
    );

    this._user = user;

    return user;
  }

  @action
  public async signUp(
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    phoneNumber: string
  ): Promise<User> {
    const user: User = await this.userService.signUpUser(
      email,
      password,
      firstName,
      lastName,
      phoneNumber
    );

    await this.login(email, password);

    return user;
  }
}
