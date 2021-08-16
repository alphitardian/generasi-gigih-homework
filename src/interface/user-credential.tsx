export interface CredentialState {
  userId: string;
  token: string | null;
  tokenType: string | null;
  isLoggedin: boolean;
}

export interface UserState {
  name: string;
  imgUrl: string;
  country: string;
  product: string;
  email: string;
}
