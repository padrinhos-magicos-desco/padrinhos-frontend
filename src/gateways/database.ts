import { Sponsor } from '../domain/sponsor';
import Sponsored from '../domain/sponsored';

class Database {
  private Sponsors: Array<Sponsor> = [];

  private Sponsoreds: Array<Sponsored> = [];

  public getSponsors(): Array<Sponsor> {
    return this.Sponsors;
  }

  public getSponsor(id: number): Sponsor | undefined {
    return this.Sponsors.find((sponsor) => sponsor.Id === id);
  }

  public addSponsor(sponsor: Sponsor): void {
    this.Sponsors.push(sponsor);
  }

  public removeSponsor(id: number): void {
    this.Sponsors = this.Sponsors.filter((sp) => sp.Id !== id);
  }

  public getSponsoreds(): Array<Sponsored> {
    return this.Sponsoreds;
  }

  public getSponsored(id: number): Sponsored | undefined {
    return this.Sponsoreds.find((sponsor) => sponsor.Id === id);
  }

  public addSponsored(sponsored: Sponsored): void {
    this.Sponsoreds.push(sponsored);
  }

  public removeSponsored(id: number): void {
    this.Sponsoreds = this.Sponsoreds.filter((sp) => sp.Id !== id);
  }
}

export default Database;
