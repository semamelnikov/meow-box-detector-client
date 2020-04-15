export class UserRegistrationForm {
  deviceName: string;
  login: string;
  password: string;
  name: string;
  weight: number;
  age: number;
  breed: string;
}

export class UserLoginForm {
  login: string;
  password: string;
}

export class RequestStatus {
  text: string;
  isSuccess: boolean;
}
