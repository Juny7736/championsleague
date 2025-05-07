export interface Team {
  id: string;
  name: string;
  country: string;
  logo: string;
  group: string;
  clWins: number;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  points: number;
  foundedYear: number;
  stadium: string;
  coach: string;
  history: string;
}

export interface Player {
  id: string;
  name: string;
  position: string;
  nationality: string;
  age: number;
  teamId: string;
  teamName: string;
  teamLogo: string;
  image: string;
  goals: number;
  assists: number;
  appearances: number;
  minutesPlayed: number;
  yellowCards: number;
  redCards: number;
  biography: string;
}

export interface Match {
  id: string;
  homeTeam: {
    id: string;
    name: string;
    logo: string;
  };
  awayTeam: {
    id: string;
    name: string;
    logo: string;
  };
  date: string;
  stage: string;
  status: 'upcoming' | 'live' | 'completed';
  homeScore?: number;
  awayScore?: number;
  stadium: string;
  location: string;
}

export interface TeamStanding {
  id: string;
  name: string;
  logo: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  points: number;
}

export interface TopScorer {
  id: string;
  name: string;
  teamName: string;
  teamLogo: string;
  goals: number;
  appearances: number;
}