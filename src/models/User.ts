export class User {
    public readonly id: number;
    public readonly email: string;
    public readonly firstName: string;
    public readonly lastName: string;
    public readonly phoneNumber: string;
    public readonly authId: string;
    public readonly createDate: Date;
    public readonly updateDate: Date;

    public constructor(params: Partial<User> = {}) {
        const {
            id,
            email,
            firstName = '',
            lastName = '',
            phoneNumber = '',
            createDate = '',
            updateDate = '',
            authId = '',
        } = params;

        this.id = id!;
        this.email = email!;
        this.firstName = firstName.trim();
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.authId = authId;
        this.createDate = new Date(createDate);
        this.updateDate = new Date(updateDate);
    }
}