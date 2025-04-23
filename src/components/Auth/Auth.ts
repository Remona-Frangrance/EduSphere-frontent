export interface LoginResponse {
  success: boolean;
  data: {
    token: string;
    user: {
      _id: string;
      name: string;
      email: string;
      role: string;
    };
  };
  message: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}export interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
}

export interface LoginResponse {
  success: boolean;
  data: {
    token: string;
    user: User;
  };
  message: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}