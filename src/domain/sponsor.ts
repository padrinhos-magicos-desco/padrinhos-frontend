import BasePerson from './base-person';

class Sponsor extends BasePerson {
  public Address: string | undefined;

  public Type: SponsorType | undefined;

  public Document: string | undefined;

  public Investment: Map<string, number> | undefined;
}

enum SponsorType {
  Person,
  Company,
}

export { Sponsor, SponsorType };
