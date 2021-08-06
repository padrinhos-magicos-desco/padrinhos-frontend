import { Sponsor } from '../domain/sponsor';
import Sponsored from '../domain/sponsored';
import { Sponsorship } from '../domain/sponsorship';

class Database {
  private Sponsors: Array<Sponsor> = [];

  private Sponsoreds: Array<Sponsored> = [];

  private Sponsorships: Array<Sponsorship> = [];

  public static getDatabase(): Database {
    return new Database();
  }

  // #region sponsors methods
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
  // #endregion

  // #region sponsoreds methods
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
  // #endregion

  // #region sponsorships methods
  public getSponsorshipsBySponsorId(id: number): Sponsorship | undefined {
    return this.Sponsorships.find(
      (sponsorship) => sponsorship.Sponsor.Id === id
    );
  }

  public getSponsorshipsBySponsoredId(id: number): Sponsorship | undefined {
    return this.Sponsorships.find(
      (sponsorship) => sponsorship.Sponsored.Id === id
    );
  }

  public addSponsorship(sponsorship: Sponsorship): void {
    this.Sponsorships.push(sponsorship);
  }
  // #endregion
}

export default Database;
