// import { observable, computed, action } from "mobx";
import { User } from "../models/User";

export interface IUserStore {
    _user: User | null;
    getCurrentUser(firebaseId: string, authUser?: firebase.User): void;
    login(email: string, password: string): Promise<User>;
    googleLogin(): Promise<User>;
}

export class UserStore {

    // constructor() {
    //     this.listenUserAuth();
    // }

    // @observable public _user: User | null = null;

    // @computed
    // public get user(): User | null {
    //     return this._user;
    // }

    // @action
    // public async getCurrentUser(firebaseId: string, authUser?: firebase.User): Promise<void> {
    //     const existingUser: User | null = await UserService.getUserByFireBaseToken(firebaseId);
    //     if ((existingUser === null) && authUser) {
    //         const newUser: User | null = await UserService.addUserFromFirebaseUser(authUser);
    //         this._user = newUser;
    //     } else {
    //         this._user = existingUser;
    //     }
    // }

    // public updateUser = (authUser: firebase.User | null) => {
    //     if (null !== authUser) {
    //         this.getCurrentUser(authUser.uid, authUser);
    //     } else {
    //         this._user = null;
    //     }
    // };

    // public listenUserAuth(): void {
    //     AuthService.listenUserAuth(this.updateUser);
    // }
}