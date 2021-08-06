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

  // #region Mocks de apadrinhados
  private Sponsoreds: Array<Sponsored> = [
    new Sponsored(
      'José',
      'da Silva',
      'jose.silva@teste.com',
      '123456',
      '2197881245',
      'Engenharia da Computação',
      'Nesse pull request, o último pull request desse SCRUM causou o bug da execução parelela de funções em multi-threads.',
      900,
      'Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis. Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis. Copo furadis é disculpa de bebadis, arcu quam euismod magna. Sapien in monti palavris qui num significa nadis i pareci latim.',
      75
    ),
    new Sponsored(
      'Edson Luiz',
      'Campos',
      'edson.campos@teste.com',
      '123456',
      '69994944231',
      'Administração',
      'A equipe de suporte precisa saber que a normalização da data deletou todas as entradas no fechamento automático das tags.',
      700,
      'Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.',
      40
    ),
    new Sponsored(
      'Luna',
      'Sebastiana Corte Real',
      'l.corte.real@teste.com',
      '123456',
      '41995798525',
      'Pedagogia',
      'Por outro lado, a percepção das dificuldades assume importantes posições no estabelecimento dos conhecimentos estratégicos para atingir a excelência.',
      1500,
      'Quem num gosta di mé, boa gentis num é. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Paisis, filhis, espiritis santis. Não sou faixa preta cumpadi, sou preto inteiris, inteiris.',
      33
    ),
    new Sponsored(
      'Nelson Igor',
      'das Neves',
      'jose.silva@teste.com',
      '123456',
      '68984214249',
      'Engenharia da Computação',
      'A prática cotidiana prova que a competitividade nas transações comerciais maximiza as possibilidades por conta do processo de comunicação como um todo.',
      900,
      'Casamentiss faiz malandris se pirulitá. Manduma pindureta quium dia nois paga. Delegadis gente finis, bibendum egestas augue arcu ut est. Interagi no mé, cursus quis, vehicula ac nisi.',
      12
    ),
    new Sponsored(
      'Evelyn Milena',
      'Santos',
      'eve.milena.santos@teste.com',
      '123456',
      '51988183420',
      'Pedagogia',
      'Nunca é demais lembrar o peso e o significado destes problemas, uma vez que a necessidade de renovação processual aponta para a melhoria do remanejamento dos quadros funcionais.',
      1600,
      'Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis. Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis. Copo furadis é disculpa de bebadis, arcu quam euismod magna. Sapien in monti palavris qui num significa nadis i pareci latim.',
      36
    ),
    new Sponsored(
      'Ryan',
      'Caio Galvão',
      'rcgalvao@teste.com',
      '123456',
      '61986621230',
      'Administração',
      'Evidentemente, o início da atividade geral de formação de atitudes é uma das consequências do orçamento setorial.',
      2300,
      'Quem manda na minha terra sou euzis! Aenean aliquam molestie leo, vitae iaculis nisl. Manduma pindureta quium dia nois paga. Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus.',
      54
    ),
    new Sponsored(
      'Enrico Ryan',
      'Henry da Cruz',
      'ryan.cruz@teste.com',
      '123456',
      '92994132912',
      'Marketing',
      'Acima de tudo, é fundamental ressaltar que o comprometimento entre as equipes cumpre um papel essencial na formulação das formas de ação.',
      1100,
      'Viva Forevis aptent taciti sociosqu ad litora torquent. Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl. Detraxit consequat et quo num tendi nada. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget.',
      35
    ),
    new Sponsored(
      'Ricardo',
      'Matheus Cavalcanti',
      'ricky.cavalcanty@teste.com',
      '123456',
      '2197884565',
      'Engenharia da Computação',
      'Estou bem, obrigado!',
      900,
      'Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Quem num gosta di mé, boa gentis num é. Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus. A ordem dos tratores não altera o pão duris.',
      87
    ),
    new Sponsored(
      'Laís Antonella',
      'Peixoto',
      'lalapeixoto@teste.com',
      '123456',
      '55991898188',
      'Marketing',
      'As experiências acumuladas demonstram que a competitividade nas transações comerciais ainda não demonstrou convincentemente que vai participar na mudança do fluxo de informações.',
      750,
      'In elementis mé pra quem é amistosis quis leo. Suco de cevadiss deixa as pessoas mais interessantis. Quem num gosta di mé, boa gentis num é. Quem manda na minha terra sou euzis!',
      89
    ),
    new Sponsored(
      'Vitória Marli',
      'Freitas',
      'vivi_freitas_12@teste.com',
      '123456',
      '84986816372',
      'Administração',
      'O que temos que ter sempre em mente é que o comprometimento entre as equipes oferece uma interessante oportunidade para verificação das novas proposições.',
      1250,
      'Quem num gosta di mé, boa gentis num é. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget.',
      10
    ),
  ];
  // #endregion

  private Sponsorships: Array<Sponsorship> = [];

  private static singleDatabase: Database | undefined;

  public serializeDB(): void {
    localStorage.setItem(
      'database',
      JSON.stringify({
        sponsors: this.Sponsors,
        sponsoreds: this.Sponsoreds,
      })
    );
  }

  public deserializeDB(): void {
    const toParse = localStorage.getItem('database');
    if (!toParse) {
      return;
    }
    const database = JSON.parse(toParse);

    if (database.sponsor) {
      this.Sponsors = database.sponsor;
    }

    if (database.sponsoreds) {
      this.Sponsoreds = database.sponsoreds || [];
    }
  }

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
      return new Sponsor(
        sponsor.Name,
        sponsor.LastName,
        sponsor.Email,
        sponsor.Password,
        sponsor.Phone,
        sponsor.Type,
        sponsor.Document,
        sponsor.InvestmentRange
      );
    }

    const sponsored = this.Sponsoreds.find(
      (s) => s.Email === email && s.Password === password
    );

    if (sponsored) {
      return new Sponsored(
        sponsored.Name,
        sponsored.LastName,
        sponsored.Email,
        sponsored.Password,
        sponsored.Phone,
        sponsored.DesiredCourse,
        sponsored.MyMoment,
        sponsored.MonthlyIncome,
        sponsored.Biography
      );
    }

    return null;
  }
  // #endregion
}

export default Database;
