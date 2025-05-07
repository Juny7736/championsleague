import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useRealtimeData } from '../hooks/useRealtimeData';
import type { Team, Player, Match } from '../types';

import HeroSection from '../components/HeroSection';
import TeamCard from '../components/TeamCard';
import PlayerCard from '../components/PlayerCard';
import MatchCard from '../components/MatchCard';
import StatsCard from '../components/StatsCard';

const Home: React.FC = () => {
  const { data: teams, loading: teamsLoading } = useRealtimeData<Team>('teams', [], {
    orderBy: 'points.desc',
  });
  
  const { data: players, loading: playersLoading } = useRealtimeData<Player>('players', [], {
    orderBy: 'goals.desc',
  });
  
  const { data: matches, loading: matchesLoading } = useRealtimeData<Match>('matches', []);

  const featuredTeams = teams.slice(0, 4);
  const topScorers = players.slice(0, 5);
  const liveMatches = matches.filter(match => match.status === 'live');
  const upcomingMatches = matches
    .filter(match => match.status === 'upcoming')
    .slice(0, 3);
  const recentMatches = matches
    .filter(match => match.status === 'completed')
    .slice(0, 3);

  const topScorerData = topScorers.map(player => ({
    name: player.name,
    value: player.goals,
  }));

  if (teamsLoading || playersLoading || matchesLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-champions-blue"></div>
      </div>
    );
  }

  return (
    <div>
      <HeroSection
        title="UEFA Champions League 2025"
        subtitle="Follow the most prestigious club competition in European football with comprehensive coverage of teams, players, and matches."
      />

      <section className="py-12 bg-white">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-champions-blue">Featured Teams</h2>
            <Link 
              to="/teams" 
              className="flex items-center text-champions-blue hover:text-secondary-600 transition font-medium"
            >
              View All Teams <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredTeams.map(team => (
              <TeamCard key={team.id} team={team} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-champions-blue">Live Matches</h2>
              </div>
              {liveMatches.length > 0 ? (
                <div className="space-y-4">
                  {liveMatches.map(match => (
                    <MatchCard key={match.id} match={match} />
                  ))}
                </div>
              ) : (
                <div className="card p-8 text-center">
                  <p className="text-slate-600">No live matches at the moment</p>
                </div>
              )}

              <div className="flex justify-between items-center mb-6 mt-8">
                <h2 className="text-2xl font-bold text-champions-blue">Upcoming Matches</h2>
                <Link 
                  to="/fixtures" 
                  className="flex items-center text-champions-blue hover:text-secondary-600 transition font-medium"
                >
                  View All <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              <div className="space-y-4">
                {upcomingMatches.map(match => (
                  <MatchCard key={match.id} match={match} />
                ))}
              </div>

              <div className="flex justify-between items-center mb-6 mt-8">
                <h2 className="text-2xl font-bold text-champions-blue">Recent Results</h2>
                <Link 
                  to="/fixtures" 
                  className="flex items-center text-champions-blue hover:text-secondary-600 transition font-medium"
                >
                  View All <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              <div className="space-y-4">
                {recentMatches.map(match => (
                  <MatchCard key={match.id} match={match} />
                ))}
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-champions-blue">Top Scorers</h2>
                <Link 
                  to="/statistics" 
                  className="flex items-center text-champions-blue hover:text-secondary-600 transition font-medium"
                >
                  View All <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              <StatsCard 
                title="Goals" 
                data={topScorerData} 
              />

              <div className="flex justify-between items-center mb-6 mt-8">
                <h2 className="text-2xl font-bold text-champions-blue">Top Players</h2>
                <Link 
                  to="/players" 
                  className="flex items-center text-champions-blue hover:text-secondary-600 transition font-medium"
                >
                  View All <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {topScorers.slice(0, 2).map(player => (
                  <Link key={player.id} to={`/players/${player.id}`} className="block">
                    <div className="card p-4 flex items-center space-x-4 hover:shadow-md transition-shadow">
                      <div className="w-16 h-16 rounded-full bg-slate-200 flex-shrink-0 overflow-hidden">
                        <img 
                          src="https://images.pexels.com/photos/3148452/pexels-photo-3148452.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                          alt={player.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{player.name}</h3>
                        <div className="flex items-center space-x-2 text-sm text-slate-600">
                          <img src={player.teamLogo} alt={player.teamName} className="w-4 h-4" />
                          <span>{player.teamName}</span>
                        </div>
                        <p className="text-sm mt-1">
                          <span className="font-semibold text-champions-blue">{player.goals} goals</span> in {player.appearances} matches
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-champions-blue text-white">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">The Road to the Final</h2>
            <p className="max-w-3xl mx-auto text-slate-200">
              Follow every moment of the 2025 UEFA Champions League campaign as Europe's elite clubs battle for supremacy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/15 transition">
              <div className="text-champions-gold text-4xl font-bold mb-2">Group Stage</div>
              <p className="text-slate-200 mb-4">32 teams compete in 8 groups of 4, with the top 2 teams from each group advancing to the knockout stage.</p>
              <Link 
                to="/fixtures" 
                className="inline-block px-4 py-2 bg-champions-gold text-champions-blue font-medium rounded hover:bg-opacity-90 transition"
              >
                View Group Stage
              </Link>
            </div>
            
            <div className="card bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/15 transition">
              <div className="text-champions-gold text-4xl font-bold mb-2">Knockout Stage</div>
              <p className="text-slate-200 mb-4">16 teams compete in two-legged knockout ties, with away goals rule in effect. Quarter-finals, semi-finals, and final determine the champion.</p>
              <Link 
                to="/fixtures" 
                className="inline-block px-4 py-2 bg-champions-gold text-champions-blue font-medium rounded hover:bg-opacity-90 transition"
              >
                View Knockout Stage
              </Link>
            </div>
            
            <div className="card bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/15 transition">
              <div className="text-champions-gold text-4xl font-bold mb-2">The Final</div>
              <p className="text-slate-200 mb-4">The ultimate match to determine Europe's top club, held at a prestigious neutral venue selected by UEFA.</p>
              <Link 
                to="/fixtures" 
                className="inline-block px-4 py-2 bg-champions-gold text-champions-blue font-medium rounded hover:bg-opacity-90 transition"
              >
                View Final
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;