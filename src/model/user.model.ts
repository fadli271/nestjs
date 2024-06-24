export class RegisterUserRequest {
  username: string;
  passsword: string;
  name: string;
}

export class UserResponse {
  username: string;
  name: string;
  token?: string;
}
