import { Guid } from 'guid-typescript';
import Sponsor, { SponsorType } from '../domain/sponsor';
import Sponsored from '../domain/sponsored';
import { Sponsorship } from '../domain/sponsorship';

class Database {
  private Sponsors: Array<Sponsor> = [
    new Sponsor(
      'Padrinho',
      'Magico',
      'padrinho@magico.com',
      '123456',
      '2199999998',
      SponsorType.Person,
      '12345678901',
      '4000'
    ),
  ];

  private Sponsoreds: Array<Sponsored> = [
    new Sponsored(
      'Usuario',
      'Teste',
      'teste@teste.com',
      '123456',
      '2199999999',
      'Ciência da Computação',
      'Estou bem, obrigado!',
      '1000',
      'Sou muito legal'
    ),
  ];

  private Sponsorships: Array<Sponsorship> = [];

  private static singleDatabase: Database | undefined;

  public static getDatabase(): Database {
    if (!this.singleDatabase) {
      this.singleDatabase = new Database();
    }
    return this.singleDatabase;
  }

  public static getUserLogged(): Sponsored | Sponsor | null {
    const userLoggedString = localStorage.getItem('userLogged');
    if (!userLoggedString) {
      return null;
    }
    return JSON.parse(userLoggedString);
  }

  // #region sponsors methods
  public getSponsors(): Array<Sponsor> {
    return this.Sponsors;
  }

  public getSponsor(id: string): Sponsor | undefined {
    return this.Sponsors.find((sponsor) => sponsor.Id === Guid.parse(id));
  }

  public addSponsor(sponsor: Sponsor): void {
    this.Sponsors.push(sponsor);
  }

  public removeSponsor(id: string): void {
    this.Sponsors = this.Sponsors.filter((sp) => sp.Id !== Guid.parse(id));
  }
  // #endregion

  // #region sponsoreds methods
  public getSponsoreds(): Array<Sponsored> {
    return this.Sponsoreds;
  }

  public getSponsored(id: string): Sponsored | undefined {
    return this.Sponsoreds.find((sponsor) => sponsor.Id === Guid.parse(id));
  }

  public addSponsored(sponsored: Sponsored): void {
    this.Sponsoreds.push(sponsored);
  }

  public removeSponsored(id: string): void {
    this.Sponsoreds = this.Sponsoreds.filter((sp) => sp.Id !== Guid.parse(id));
  }
  // #endregion

  // #region sponsorships methods
  public getSponsorshipsBySponsorId(id: string): Sponsorship | undefined {
    return this.Sponsorships.find(
      (sponsorship) => sponsorship.Sponsor.Id === Guid.parse(id)
    );
  }

  public getSponsorshipsBySponsoredId(id: string): Sponsorship | undefined {
    return this.Sponsorships.find(
      (sponsorship) => sponsorship.Sponsored.Id === Guid.parse(id)
    );
  }

  public addSponsorship(sponsorship: Sponsorship): void {
    this.Sponsorships.push(sponsorship);
  }
  // #endregion

  // #region login methods
  public getLogin(email: string, password: string): Sponsor | Sponsored | null {
    const sponsor = this.Sponsors.find(
      (s) => s.Email === email && s.Password === password
    );
    if (sponsor) {
      return sponsor;
    }

    const sponsored = this.Sponsoreds.find(
      (s) => s.Email === email && s.Password === password
    );
    if (sponsored) {
      return sponsored;
    }

    return null;
  }
  // #endregion
}

export default Database;
