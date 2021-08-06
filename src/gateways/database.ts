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
      'Mesmo o sujeito transcendental nos revela que a infinita diversidade da realidade única maximiza as possibilidades por conta das condições epistemológicas e cognitivas exigidas. Por outro lado, a complexidade dos estudos efetuados cumpre um papel essencial na formulação do antiplatonismo fichteano resultante dos movimentos revolucionários de então. Assim mesmo, a estrutura atual da ideação semântica exige a precisão e a definição das relações entre o conteúdo proposicional e o figurado. No entanto, não podemos esquecer que o novo modelo estruturalista aqui preconizado auxilia a preparação e a composição das posturas dos filósofos divergentes com relação às atribuições conceituais.',
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
      'Do mesmo modo, o objeto metapsicológico da razão garante a contribuição de um grupo importante na determinação do direito romano. Finalmente, por trás dessa questão do sujeito e da realidade a consolidação das estruturas psico-lógicas assume importantes posições no estabelecimento das direções preferenciais no sentido do progresso filosófico. Nunca é demais lembrar o peso e o significado destes problemas, uma vez que o conceito de diáthesis e os princípios fundamentais de rhytmos e arrythmiston justificaria a existência do fluxo de informações.',
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
      'Como Deleuze eloquentemente mostrou, o início da atividade geral de formação de conceitos obstaculiza a apreciação da importância do dualismo ontológico das filosofias pré-hegelianas? Deixemos a questão em aberto. Acabei de provar que o desafiador cenário globalizado não oferece uma interessante oportunidade para verificação da dissociação entre o político e o religioso. Se estivesse vivo, Foucault diria que o Übermensch de Nietzsche, ou seja, o Super-Homem, acarreta um processo de reformulação e modernização do processo de comunicação como um todo.',
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
      'As experiências acumuladas demonstram que a expansão dos mercados mundiais possibilita uma interpretação objetiva das definições conceituais da matéria. Contudo, a crítica contundente de Deleuze/Guatarri - dupla implacável - nos mostra que a alteridade do rio heraclítico cumpre um papel essencial na formulação dos princípios da ética normativa deontológica. Segundo Heidegger, o entendimento das metas propostas ainda não demonstrou convincentemente como vai participar na mudança dos testes de falseabilidade das teorias científicas.',
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
      'Segundo a tese da eliminabilidade, o aumento do diálogo entre os diferentes setores filosóficos talvez venha a ressaltar a relatividade de universos de Contemplação, espelhados na arte minimalista e no expressionismo abstrato, absconditum. Ainda assim, existem dúvidas a respeito de como a crescente influência da mídia prepara-nos para enfrentar situações atípicas decorrentes dos conceitos nominalistas. A prática cotidiana prova que a necessidade de renovação conceitual permitiria a desconstrução da corrente inovadora da qual fazemos parte.',
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
      'Pode-se argumentar, como Bachelard fizera, que o a priori histórico de uma experiência possível desafia a capacidade de equalização das considerações acima? Nada se pode dizer, pois sobre o que não se pode falar, deve-se calar. Efetuando uma ruptura com Descartes, o uno-múltiplo, repouso-movimento, finito indeterminado, agrega valor ao estabelecimento dos argumentos pró-dêiticos de uma visão subjetivista da ética teleológica. O segundo Wittgenstein (é importante não confundir com o primeiro Wittgenstein) nos mostrou que a instauração do modo aporético do Uno é consequência de uma abordagem dogmática a respeito de todos os recursos funcionais envolvidos.',
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
      'Segundo Nietzsche, o cálculo proposicional não-quantificado justificaria a adoção dos paradoxos de Zenão, amparados em uma proposta logicista. O dualismo inegável de numerosos pontos evidencia o quanto o não-ser que não é nada facilita a criação das regras de conduta normativas. Seguindo o fluxo da corrente analítica anglo-saxônica, a impossibilidade da possessão da verdade última possibilita uma melhor visão global da dissimetria dos dois tipos de polissemia epistêmica.',
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
      'Este pensamento está vinculado à desconstrução da metafísica, pois o Cristianismo entendido como degradação, na perspectiva universal do polêmico anticristo nietzscheano, não efetua a conexão habitual da sensibilia dos não-sentidos. O movimento inverso da proaíresis, que avança -pro-, como a pro-lépsis, demonstra que o fenômeno da compulsão da repetição aponta para a melhoria da linguagem privada. Evidentemente, o comprometimento entre as ontologias faz parte de um processo de agenciamento dos conceitos de propriedade e cidadania. Deve-se produzir um conceito que a determinação clara de objetivos obstaculiza a admissão de uma ontologia da coisa-em-si, entendida como substância retrocedente.',
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
      'Eu sou a Milena, sou de Barreirinhas no Maranhão, vim de escola pública e não tive condições de pagar a mensalidade do vestibular Descomplica. Estudei com vocês pelo youtube e passei para uma universidade pública, porém não tive condições de manter meus estudos devido a necessidade de deslocamento! Hoje, gostaria de um suporte para estudar online na faculdade Descomplica.',
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
      ' Não obstante, uma adoção de metodologias descentralizadoras constitui uma propriedade inalienável do sistema de formação de quadros que corresponde às necessidades lógico-estruturais. Pensando mais a longo prazo, o princípio leibnizano da identidade dos indiscerníveis e indiscernibilidade dos idênticos apresenta tendências no sentido de aprovar a manutenção dos meios de comunicação, The Media, o fator condicionante da interdependência virtual. O que temos que ter sempre em mente é que a desaceleração no caos ou no limiar de suspensão do infinito é uma das consequências dos paradigmas filosóficos. Contra esta teoria, que admite a realidade empírica do tempo, o fenômeno da Internet afeta positivamente a correta previsão da substância aristotélica fundida com o solipsismo cartesiano em função de uma perspectiva dialético-social.',
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
    return this.Sponsoreds.sort((a, b) => {
      return (b.Progress || 0) - (a.Progress || 0);
    });
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
