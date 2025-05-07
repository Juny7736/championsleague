import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import MatchCard from '../components/MatchCard';
import { matches } from '../data/matches';
import { teams } from '../data/teams';

const Fixtures: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const [teamFilter, setTeamFilter] = useState('all');

  const filteredMatches = matches.filter(match => {
    const matchesStatus = filter === 'all' || match.status === filter;
    const matchesTeam = teamFilter === 'all' || match.homeTeam.id === teamFilter || match.awayTeam.id === teamFilter;
    return matchesStatus && matchesTeam;
  });

  return (
    <div>
      <HeroSection
        title="Fixtures & Results"
        subtitle="Follow all the matches from the 2025 UEFA Champions League"
        backgroundImage="https://images.pexels.com/photos/41257/pexels-photo-41257.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />
      
      <section className="py-12">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div>
              <select
                className="w-full md:w-auto px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-500"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value="all">All Matches</option>
                <option value="upcoming">Upcoming</option>
                <option value="live">Live</option>
                <option value="completed">Completed</option>
              </select>
            </div>
            <div>
              <select
                className="w-full md:w-auto px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-500"
                value={teamFilter}
                onChange={(e) => setTeamFilter(e.target.value)}
              >
                <option value="all">All Teams</option>
                {teams.map(team => (
                  <option key={team.id} value={team.id}>{team.name}</option>
                ))}
              </select>
            </div>
          </div>

          {filteredMatches.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredMatches.map(match => (
                <MatchCard key={match.id} match={match} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-slate-600">No matches found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Fixtures;