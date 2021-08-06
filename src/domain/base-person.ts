export default class BasePerson {
  public Id: number;

  public Name: string;

  public LastName: string;

  public Email: string;

  public Password: string;

  public Phone: string;

  constructor(
    id: number,
    name: string,
    lastName: string,
    email: string,
    password: string,
    phone: string
  ) {
    this.Id = id;
    this.Name = name;
    this.LastName = lastName;
    this.Email = email;
    this.Password = password;
    this.Phone = phone;
  }
}
