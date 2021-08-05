import BasePerson from './base-person';

export class Sponsor extends BasePerson {
  public Address: string | undefined;

  public Type: SponsorType | undefined;

  public Document: string | undefined;

  public Investment: Map<string, number> | undefined;
}

export enum SponsorType {
  Person,
  Company,
}
