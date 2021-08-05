import { Sponsor } from '../domain/sponsor';
import Sponsored from '../domain/sponsored';

class Database {
  private sponsors: Array<Sponsor> = [];

  private sponsoreds: Array<Sponsored> = [];

  public getSponsors(): Array<Sponsor> {
    return this.sponsors;
  }

  public getSponsor(id: number): Sponsor {
    return this.sponsors.filter(id);
  }

  public addSponsor(sponsor: Sponsor){
    this.sponsors.add(sponsor);
  }

  public removeSponsor(id: number){
    this.sponsors.remove();
  }

  public getSponsoreds() {
    return this.sponsoreds;
  }
}

export default Database;
