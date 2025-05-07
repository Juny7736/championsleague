import { Team } from '../types';

export const teams: Team[] = [
  {
    id: '1',
    name: 'Real Madrid',
    country: 'Spain',
    logo: 'https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg',
    group: 'A',
    clWins: 5,
    played: 4,
    won: 3,
    drawn: 1,
    lost: 0,
    points: 10,
    foundedYear: 1902,
    stadium: 'Santiago Bernabéu',
    coach: 'Carlo Ancelotti',
    history: 'Real Madrid Club de Fútbol, commonly referred to as Real Madrid, is a Spanish professional football club based in Madrid. The club has won numerous Champions League titles and is considered one of the most successful football clubs in European history.'
  },
  {
    id: '2',
    name: 'Manchester City',
    country: 'England',
    logo: 'https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg',
    group: 'B',
    clWins: 1,
    played: 4,
    won: 4,
    drawn: 0,
    lost: 0,
    points: 12,
    foundedYear: 1880,
    stadium: 'Etihad Stadium',
    coach: 'Pep Guardiola',
    history: 'Manchester City Football Club is an English football club based in Manchester. The club has seen significant success in recent years, winning multiple Premier League titles and their first Champions League title.'
  },
  {
    id: '3',
    name: 'Bayern Munich',
    country: 'Germany',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg',
    group: 'C',
    clWins: 4,
    played: 4,
    won: 3,
    drawn: 0,
    lost: 1,
    points: 9,
    foundedYear: 1900,
    stadium: 'Allianz Arena',
    coach: 'Thomas Tuchel',
    history: 'FC Bayern Munich is a German professional football club based in Munich, Bavaria. It is the most successful club in German football history, having won a record number of Bundesliga titles and multiple Champions League trophies.'
  },
  {
    id: '4',
    name: 'Paris Saint-Germain',
    country: 'France',
    logo: 'https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg',
    group: 'D',
    clWins: 0,
    played: 4,
    won: 2,
    drawn: 1,
    lost: 1,
    points: 7,
    foundedYear: 1970,
    stadium: 'Parc des Princes',
    coach: 'Luis Enrique',
    history: 'Paris Saint-Germain Football Club, commonly referred to as PSG, is a French professional football club based in Paris. Founded in 1970, the club has established itself as a major force in French football and has made significant progress in European competitions in recent years.'
  },
  {
    id: '5',
    name: 'Liverpool',
    country: 'England',
    logo: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg',
    group: 'A',
    clWins: 3,
    played: 4,
    won: 2,
    drawn: 0,
    lost: 2,
    points: 6,
    foundedYear: 1892,
    stadium: 'Anfield',
    coach: 'Jürgen Klopp',
    history: 'Liverpool Football Club is a professional football club based in Liverpool, England. The club has won numerous domestic and international titles including multiple Champions League trophies.'
  },
  {
    id: '6',
    name: 'Barcelona',
    country: 'Spain',
    logo: 'https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg',
    group: 'B',
    clWins: 5,
    played: 4,
    won: 2,
    drawn: 1,
    lost: 1,
    points: 7,
    foundedYear: 1899,
    stadium: 'Camp Nou',
    coach: 'Xavi Hernandez',
    history: 'Futbol Club Barcelona, commonly referred to as Barcelona and colloquially known as Barça, is a Spanish professional football club based in Barcelona, Catalonia. The club has won multiple Champions League titles and is known for its distinctive playing style.'
  },
  {
    id: '7',
    name: 'Juventus',
    country: 'Italy',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Juventus_FC_2017_logo.svg',
    group: 'C',
    clWins: 2,
    played: 4,
    won: 1,
    drawn: 2,
    lost: 1,
    points: 5,
    foundedYear: 1897,
    stadium: 'Allianz Stadium',
    coach: 'Massimiliano Allegri',
    history: 'Juventus Football Club, colloquially known as Juve, is a professional football club based in Turin, Piedmont, Italy. The club has won multiple Serie A titles and has been a consistent performer in European competitions.'
  },
  {
    id: '8',
    name: 'AC Milan',
    country: 'Italy',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/AC_Milan_logo.svg',
    group: 'D',
    clWins: 5,
    played: 4,
    won: 1,
    drawn: 1,
    lost: 2,
    points: 4,
    foundedYear: 1899,
    stadium: 'San Siro',
    coach: 'Stefano Pioli',
    history: 'Associazione Calcio Milan, commonly referred to as AC Milan or simply Milan, is a professional football club based in Milan, Italy. The club has won multiple Champions League titles and has been home to many legendary players throughout its history.'
  }
];

export const getTeamById = (id: string): Team | undefined => {
  return teams.find(team => team.id === id);
};

export const getTeamsByGroup = (group: string): Team[] => {
  return teams.filter(team => team.group === group);
};