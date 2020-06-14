import { ApiService } from './ApiService';
import { User } from 'models/User';

export class UserService {
  private apiService = new ApiService();

  public async signUpUser(
    email: string,
    password: string,
    firstName?: string,
    lastName?: string,
    phoneNumber?: string
  ): Promise<User> {
    const mutationString: string = `
        mutation { signUpUser(
            email: "${email}"
            password: "${password}"
            ${firstName ? `firstName: "${firstName}"` : ''}
            ${lastName ? `lastName: "${lastName}"` : ''}
            ${phoneNumber ? `phoneNumber: "${phoneNumber}"` : ''}
          ) {
                user {
                    id
                    email
                    firstName
                    lastName
                    phoneNumber
                    accounts{
                        id
                        name
                        createDate
                        updateDate
                    }
                }
                errors {
                    message
                }
            }
        }
      `;

    // return request(BASE_API, mutationString).then((data: any) => {
    //     if (data.signUpUser.user === null || data.signUpUser.errors.length > 0) {
    //         throw (data.signUpUser.errors);
    //     }
    //     return new User(data.signUpUser.user);
    // }
    // );
    try {
      const response = await this.apiService.authenticatedGqlQuery(
        mutationString
      );
      if (
        response.signUpUser.user === null ||
        response.signUpUser.errors.length > 0
      ) {
        throw response.signUpUser.errors;
      }
      return new User(response.signUpUser.user);
    } catch (error) {
      throw error;
    }
  }

  public async getAuthenticatedUser(authUser: firebase.User): Promise<User> {
    const query: string = `
        query { getUserByFirebaseId(
            id: "${authUser.uid}"
          ) {
                user {
                    id
                    email
                    firstName
                    lastName
                    phoneNumber
                }
                errors {
                    message
                }
            }
        }
      `;

    try {
      const response = await this.apiService.authenticatedGqlQuery(query);
      if (
        response.getUserByFirebaseId.user === null ||
        response.getUserByFirebaseId.errors.length > 0
      ) {
        throw response.getUserByFirebaseId.errors;
      }
      return new User(response.getUserByFirebaseId.user);
    } catch (error) {
      throw error;
    }
  }

  public async signUpAuthUser(
    email: string,
    firstName: string,
    lastName: string,
    authId: string,
    phoneNumber: string | null
  ): Promise<User> {
    const mutationString: string = `
        mutation { signUpAuthorizedUser(
            email: "${email}"
            firstName: "${firstName}"
            lastName: "${lastName}"
            phoneNumber: "${phoneNumber}"
            authId: "${authId}"
          ) {
                user {
                    id
                    email
                    firstName
                    lastName
                    phoneNumber
                    authId
                }
                errors {
                    message
                }
            }
        }
      `;

    try {
      const response = await this.apiService.authenticatedGqlQuery(
        mutationString
      );
      if (
        response.signUpAuthorizedUser.user === null ||
        response.signUpAuthorizedUser.errors.length > 0
      ) {
        throw response.signUpAuthorizedUser.errors;
      }
      return new User(response.signUpAuthorizedUser.user);
    } catch (error) {
      throw error;
    }
  }
}
