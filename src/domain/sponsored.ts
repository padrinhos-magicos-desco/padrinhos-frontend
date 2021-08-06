import BasePerson from './base-person';

class Sponsored extends BasePerson {
  public DesiredCourse: string;

  public MyMoment: string;

  public Biography: string;

  public MonthlyIncome: string;

  constructor(
    name: string,
    lastName: string,
    email: string,
    password: string,
    phone: string,
    desiredCourse: string,
    myMoment: string,
    monthlyIncome: string,
    biography: string
  ) {
    super(name, lastName, email, password, phone);
    this.DesiredCourse = desiredCourse;
    this.MyMoment = myMoment;
    this.Biography = biography;
    this.MonthlyIncome = monthlyIncome;
  }
}

export default Sponsored;
