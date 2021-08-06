import BasePerson from './base-person';

export class Sponsor extends BasePerson {
  public Address: string;

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
    address: string,
    type: SponsorType,
    document: string,
    investmentRange: number
  ) {
    super(name, lastName, email, password, phone);
    this.Address = address;
    this.Type = type;
    this.Document = document;
    this.InvestmentRange = investmentRange;
  }
}

export enum SponsorType {
  Person,
  Company,
}
