import BasePerson from './base-person';

class Sponsored extends BasePerson {
  public DesiredCourse: string;

  public MyMoment: string;

  public Biography: string;

  public MonthlyIncome: number;

  public Progress?: number = 0;

  constructor(
    name: string,
    lastName: string,
    email: string,
    password: string,
    phone: string,
    desiredCourse: string,
    myMoment: string,
    monthlyIncome: number,
    biography: string,
    progress?: number
  ) {
    super(name, lastName, email, password, phone);
    this.DesiredCourse = desiredCourse;
    this.MyMoment = myMoment;
    this.Biography = biography;
    this.MonthlyIncome = monthlyIncome;
    this.Progress = progress || 0;
  }
}

export default Sponsored;
