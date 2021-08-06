import BasePerson from './base-person';

class Sponsored extends BasePerson {
  public MyMoment: string;

  public Biography: string;

  public IncomeRange: string;

  constructor(
    id: number,
    name: string,
    lastName: string,
    email: string,
    password: string,
    phone: string,
    workInformation: string,
    biography: string,
    incomeRange: string
  ) {
    super(id, name, lastName, email, password, phone);
    this.MyMoment = workInformation;
    this.Biography = biography;
    this.IncomeRange = incomeRange;
  }
}

export default Sponsored;
