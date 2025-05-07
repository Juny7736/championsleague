import { Player } from '../types';

export const players: Player[] = [
  {
    id: '1',
    name: 'Kylian Mbappé',
    position: 'Forward',
    nationality: 'France',
    age: 26,
    teamId: '1',
    teamName: 'Real Madrid',
    teamLogo: 'https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg',
    image: 'https://images.pexels.com/photos/3148452/pexels-photo-3148452.jpeg?auto=compress&cs=tinysrgb&w=1600',
    goals: 8,
    assists: 3,
    appearances: 4,
    minutesPlayed: 360,
    yellowCards: 1,
    redCards: 0,
    biography: 'Kylian Mbappé Lottin is a French professional footballer who plays as a forward. Widely considered one of the best players in the world, he is known for his dribbling, speed, and finishing.'
  },
  {
    id: '2',
    name: 'Erling Haaland',
    position: 'Forward',
    nationality: 'Norway',
    age: 25,
    teamId: '2',
    teamName: 'Manchester City',
    teamLogo: 'https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg',
    image: 'https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=1600',
    goals: 10,
    assists: 2,
    appearances: 4,
    minutesPlayed: 360,
    yellowCards: 0,
    redCards: 0,
    biography: 'Erling Braut Haaland is a Norwegian professional footballer who plays as a striker. A prolific goalscorer, he is known for his athleticism, speed, and finishing inside the box.'
  },
  {
    id: '3',
    name: 'Jamal Musiala',
    position: 'Midfielder',
    nationality: 'Germany',
    age: 22,
    teamId: '3',
    teamName: 'Bayern Munich',
    teamLogo: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg',
    image: 'https://images.pexels.com/photos/6077804/pexels-photo-6077804.jpeg?auto=compress&cs=tinysrgb&w=1600',
    goals: 3,
    assists: 6,
    appearances: 4,
    minutesPlayed: 340,
    yellowCards: 0,
    redCards: 0,
    biography: 'Jamal Musiala is a German professional footballer who plays as an attacking midfielder. He is known for his dribbling skills, vision, and playmaking abilities.'
  },
  {
    id: '4',
    name: 'Vinicius Junior',
    position: 'Forward',
    nationality: 'Brazil',
    age: 25,
    teamId: '1',
    teamName: 'Real Madrid',
    teamLogo: 'https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg',
    image: 'https://images.pexels.com/photos/1657323/pexels-photo-1657323.jpeg?auto=compress&cs=tinysrgb&w=1600',
    goals: 6,
    assists: 5,
    appearances: 4,
    minutesPlayed: 360,
    yellowCards: 2,
    redCards: 0,
    biography: 'Vinícius José Paixão de Oliveira Júnior, commonly known as Vinícius Júnior or Vini Jr., is a Brazilian professional footballer who plays as a winger. He is known for his pace, dribbling skills, and finishing ability.'
  },
  {
    id: '5',
    name: 'Phil Foden',
    position: 'Midfielder',
    nationality: 'England',
    age: 25,
    teamId: '2',
    teamName: 'Manchester City',
    teamLogo: 'https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg',
    image: 'https://images.pexels.com/photos/6264987/pexels-photo-6264987.jpeg?auto=compress&cs=tinysrgb&w=1600',
    goals: 4,
    assists: 4,
    appearances: 4,
    minutesPlayed: 350,
    yellowCards: 0,
    redCards: 0,
    biography: 'Philip Walter Foden is an English professional footballer who plays as a midfielder. He is known for his exceptional technical abilities, vision, and versatility in attacking positions.'
  },
  {
    id: '6',
    name: 'Mohamed Salah',
    position: 'Forward',
    nationality: 'Egypt',
    age: 33,
    teamId: '5',
    teamName: 'Liverpool',
    teamLogo: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg',
    image: 'https://images.pexels.com/photos/3785087/pexels-photo-3785087.jpeg?auto=compress&cs=tinysrgb&w=1600',
    goals: 5,
    assists: 3,
    appearances: 4,
    minutesPlayed: 360,
    yellowCards: 0,
    redCards: 0,
    biography: 'Mohamed Salah Hamed Mahrous Ghaly is an Egyptian professional footballer who plays as a forward. He is known for his finishing, dribbling, and speed.'
  },
  {
    id: '7',
    name: 'Jude Bellingham',
    position: 'Midfielder',
    nationality: 'England',
    age: 22,
    teamId: '1',
    teamName: 'Real Madrid',
    teamLogo: 'https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg',
    image: 'https://images.pexels.com/photos/8723846/pexels-photo-8723846.jpeg?auto=compress&cs=tinysrgb&w=1600',
    goals: 7,
    assists: 2,
    appearances: 4,
    minutesPlayed: 360,
    yellowCards: 1,
    redCards: 0,
    biography: 'Jude Victor William Bellingham is an English professional footballer who plays as a midfielder. He is known for his all-round game, including his defensive contributions, pressing, athleticism, and goal-scoring ability.'
  },
  {
    id: '8',
    name: 'Lautaro Martinez',
    position: 'Forward',
    nationality: 'Argentina',
    age: 28,
    teamId: '7',
    teamName: 'Juventus',
    teamLogo: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Juventus_FC_2017_logo.svg',
    image: 'https://images.pexels.com/photos/9594952/pexels-photo-9594952.jpeg?auto=compress&cs=tinysrgb&w=1600',
    goals: 5,
    assists: 1,
    appearances: 4,
    minutesPlayed: 340,
    yellowCards: 1,
    redCards: 0,
    biography: 'Lautaro Javier Martínez is an Argentine professional footballer who plays as a striker. He is known for his pace, technique, and goal-scoring ability.'
  }
];

export const getPlayerById = (id: string): Player | undefined => {
  return players.find(player => player.id === id);
};

export const getPlayersByTeam = (teamId: string): Player[] => {
  return players.filter(player => player.teamId === teamId);
};

export const getTopScorers = (limit: number = 5) => {
  return [...players]
    .sort((a, b) => b.goals - a.goals)
    .slice(0, limit)
    .map(player => ({
      id: player.id,
      name: player.name,
      teamName: player.teamName,
      teamLogo: player.teamLogo,
      goals: player.goals,
      appearances: player.appearances
    }));
};

export const getTopAssists = (limit: number = 5) => {
  return [...players]
    .sort((a, b) => b.assists - a.assists)
    .slice(0, limit)
    .map(player => ({
      id: player.id,
      name: player.name,
      teamName: player.teamName,
      teamLogo: player.teamLogo,
      assists: player.assists,
      appearances: player.appearances
    }));
};