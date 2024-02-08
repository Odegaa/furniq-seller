export type TLoginRequest = {
  phone: string;
  password: string;
};

export type TAuthResponse = {
  data: TAuthResponseData;
};

export type TAuthResponseData = {
  name: string;
  email: string;
  phone: string;
  role: string;
  token: string;
};
