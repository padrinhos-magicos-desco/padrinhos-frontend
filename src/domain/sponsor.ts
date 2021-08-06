import BasePerson from './base-person';

class Sponsor extends BasePerson {
  public Type: SponsorType;

  // CPF ou CNPJ
  public Document: string;

  public InvestmentRange: number;

  constructor(
    name: string,
    lastName: string,
    email: string,
    password: string,
    phone: string,
    type: SponsorType,
    document: string,
    investmentRange: number
  ) {
    super(name, lastName, email, password, phone);
    this.Type = type;
    this.Document = document;
    this.InvestmentRange = investmentRange;
  }
}

export default Sponsor;

export enum SponsorType {
  Person,
  Company,
}
