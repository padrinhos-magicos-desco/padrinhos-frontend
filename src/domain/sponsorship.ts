import Sponsor from './sponsor';
import Sponsored from './sponsored';

// PF e PJ podem escolher uma pessoa da lista e patrocinar com um valor.
// Além disso, PJ pode também se comprometer com a faculdade ou pós-graduação,
// sempre de maneira integral.
// Para isso ela precisa cadastrar o Sponsored.
enum SponsorshipType {
  FullUndergraduate,
  FullPostgraduate,
  FreeSponsorship,
}

class Sponsorship {
  public Sponsor: Sponsor;

  public Sponsored: Sponsored;

  public SponsorshipType: SponsorshipType;

  public Value: number | null;

  constructor(
    sponsor: Sponsor,
    sponsored: Sponsored,
    sponsorshipType: SponsorshipType,
    value: number | null
  ) {
    this.Sponsor = sponsor;
    this.Sponsored = sponsored;
    this.SponsorshipType = sponsorshipType;
    this.Value =
      sponsorshipType !== SponsorshipType.FreeSponsorship ? null : value;
  }
}

export { Sponsorship, SponsorshipType };
