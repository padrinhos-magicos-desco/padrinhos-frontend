import { Guid } from 'guid-typescript';

export default class BasePerson {
  public Id: Guid;

  public Name: string;

  public LastName: string;

  public Email: string;

  public Password: string;

  public Phone: string;

  constructor(
    name: string,
    lastName: string,
    email: string,
    password: string,
    phone: string
  ) {
    this.Id = Guid.create();
    this.Name = name;
    this.LastName = lastName;
    this.Email = email;
    this.Password = password;
    this.Phone = phone;
  }
}
