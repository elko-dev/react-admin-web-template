import { User } from "../models/User";
import { observable, computed, action } from 'mobx';
import { UserService } from 'service/UserService';
import { firebaseAuth } from 'config/auth.config';

export interface IUserStore {
    _user: User | null;
    getCurrentUser(firebaseId: string, authUser?: firebase.User): void;
    login(email: string, password: string): Promise<User>;
    googleLogin(): Promise<User>;
}

export class UserStore {

    constructor() {
        this.listenUserAuth();
    }

    private listenUserAuth = (): void => {
        firebaseAuth.onAuthStateChanged((authUser) => {
            if (authUser) {
                this.getCurrentUser(authUser);
            } else {
                this.getCurrentUser(undefined);
            }
        });
    }

    private userService: UserService = new UserService();

    @observable public _user: User | null = null;

    @computed
    public get user(): User | null {
        return this._user;
    }

    @action
    public async getCurrentUser(authUser?: firebase.User): Promise<void> {
        let existingUser: User | null = null;
        if (authUser) {
            existingUser = await this.userService.getAuthenticatedUser(authUser);
        }
        if ((existingUser === null) && authUser) {
            const newUser: User | null = await this.userService.signUpAuthUser(authUser.email!, authUser.displayName!, '', authUser.uid, authUser.phoneNumber);
            this._user = newUser;
        } else {
            this._user = existingUser;
        }
    }
}