import { Match } from '../types';

export const matches: Match[] = [
  {
    id: '1',
    homeTeam: {
      id: '1',
      name: 'Real Madrid',
      logo: 'https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg',
    },
    awayTeam: {
      id: '5',
      name: 'Liverpool',
      logo: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg',
    },
    date: '2025-09-16T19:45:00Z',
    stage: 'Group Stage - Matchday 1',
    status: 'completed',
    homeScore: 3,
    awayScore: 1,
    stadium: 'Santiago Bernabéu',
    location: 'Madrid, Spain',
  },
  {
    id: '2',
    homeTeam: {
      id: '2',
      name: 'Manchester City',
      logo: 'https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg',
    },
    awayTeam: {
      id: '6',
      name: 'Barcelona',
      logo: 'https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg',
    },
    date: '2025-09-17T19:45:00Z',
    stage: 'Group Stage - Matchday 1',
    status: 'completed',
    homeScore: 2,
    awayScore: 2,
    stadium: 'Etihad Stadium',
    location: 'Manchester, England',
  },
  {
    id: '3',
    homeTeam: {
      id: '3',
      name: 'Bayern Munich',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg',
    },
    awayTeam: {
      id: '7',
      name: 'Juventus',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Juventus_FC_2017_logo.svg',
    },
    date: '2025-09-18T19:45:00Z',
    stage: 'Group Stage - Matchday 1',
    status: 'completed',
    homeScore: 2,
    awayScore: 0,
    stadium: 'Allianz Arena',
    location: 'Munich, Germany',
  },
  {
    id: '4',
    homeTeam: {
      id: '4',
      name: 'Paris Saint-Germain',
      logo: 'https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg',
    },
    awayTeam: {
      id: '8',
      name: 'AC Milan',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/AC_Milan_logo.svg',
    },
    date: '2025-09-18T19:45:00Z',
    stage: 'Group Stage - Matchday 1',
    status: 'completed',
    homeScore: 1,
    awayScore: 0,
    stadium: 'Parc des Princes',
    location: 'Paris, France',
  },
  {
    id: '5',
    homeTeam: {
      id: '5',
      name: 'Liverpool',
      logo: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg',
    },
    awayTeam: {
      id: '3',
      name: 'Bayern Munich',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg',
    },
    date: '2025-10-01T19:45:00Z',
    stage: 'Group Stage - Matchday 2',
    status: 'completed',
    homeScore: 2,
    awayScore: 1,
    stadium: 'Anfield',
    location: 'Liverpool, England',
  },
  {
    id: '6',
    homeTeam: {
      id: '4',
      name: 'Paris Saint-Germain',
      logo: 'https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg',
    },
    awayTeam: {
      id: '1',
      name: 'Real Madrid',
      logo: 'https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg',
    },
    date: '2025-10-22T19:45:00Z',
    stage: 'Group Stage - Matchday 3',
    status: 'live',
    homeScore: 1,
    awayScore: 2,
    stadium: 'Parc des Princes',
    location: 'Paris, France',
  },
  {
    id: '7',
    homeTeam: {
      id: '6',
      name: 'Barcelona',
      logo: 'https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg',
    },
    awayTeam: {
      id: '3',
      name: 'Bayern Munich',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg',
    },
    date: '2025-11-05T20:00:00Z',
    stage: 'Group Stage - Matchday 4',
    status: 'upcoming',
    stadium: 'Camp Nou',
    location: 'Barcelona, Spain',
  },
  {
    id: '8',
    homeTeam: {
      id: '2',
      name: 'Manchester City',
      logo: 'https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg',
    },
    awayTeam: {
      id: '4',
      name: 'Paris Saint-Germain',
      logo: 'https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg',
    },
    date: '2025-11-06T20:00:00Z',
    stage: 'Group Stage - Matchday 4',
    status: 'upcoming',
    stadium: 'Etihad Stadium',
    location: 'Manchester, England',
  }
];

export const getMatchById = (id: string): Match | undefined => {
  return matches.find(match => match.id === id);
};

export const getMatchesByTeam = (teamId: string): Match[] => {
  return matches.filter(match => 
    match.homeTeam.id === teamId || match.awayTeam.id === teamId
  );
};

export const getUpcomingMatches = (limit: number = 3): Match[] => {
  return matches
    .filter(match => match.status === 'upcoming')
    .slice(0, limit);
};

export const getLiveMatches = (): Match[] => {
  return matches.filter(match => match.status === 'live');
};

export const getRecentMatches = (limit: number = 3): Match[] => {
  return matches
    .filter(match => match.status === 'completed')
    .slice(0, limit);
};