import { defineStore } from 'pinia';
import { Auth } from 'aws-amplify';

export interface IUser {
  name: string;
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: {} as IUser | null,
  }),
  actions: {
    setUser(payload: IUser | null) {
      this.user = payload;
    },
    async logout() {
      this.setUser(null);
      return await Auth.signOut();
    },
    //TODO: return auth promise directly instead of try catch wrp around it?
    async login(username: string, password: string) {
      try {
        await Auth.signIn({
          username,
          password
        });

        const userInfo = await Auth.currentUserInfo();
        this.setUser(userInfo);
        return Promise.resolve();
      } catch (err) {
        console.log(err);
        return Promise.reject(err);
      }
    },
    async confirmSignup(username: string, code: string) {
      try {
        await Auth.confirmSignUp(username, code);
        return Promise.resolve();
      } catch (err) {
        console.error(err);
        return Promise.reject(err);
      }
    },
    async signUp(username: string, password: string, email: string) {
      try {
        await Auth.signUp({
          username,
          password,
          attributes: {
            email
          }
        })
      } catch (err) {
        console.error(err);
        return Promise.reject(err);
      }
    },
    async authAction() {
      const userInfo = await Auth.currentUserInfo();
      this.setUser(userInfo);
    }
  },
  getters: {
    getUser: (state) => state.user
  }
});
