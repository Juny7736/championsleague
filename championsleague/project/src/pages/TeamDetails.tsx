import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Trophy, Users, Calendar, MapPin } from 'lucide-react';

import { getTeamById } from '../data/teams';
import { getPlayersByTeam } from '../data/players';
import { getMatchesByTeam } from '../data/matches';
import PlayerCard from '../components/PlayerCard';
import MatchCard from '../components/MatchCard';

const TeamDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const team = getTeamById(id || '');
  const players = getPlayersByTeam(id || '');
  const matches = getMatchesByTeam(id || '');
  
  if (!team) {
    return (
      <div className="container mx-auto py-12 px-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Team not found</h2>
          <Link to="/teams" className="text-primary-600 hover:underline">
            Back to Teams
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="bg-champions-blue text-white">
        <div className="container mx-auto py-12 px-4">
          <Link 
            to="/teams" 
            className="inline-flex items-center text-white hover:text-champions-gold transition mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Teams
          </Link>
          
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="w-40 h-40 bg-white rounded-full p-4 flex-shrink-0">
              <img 
                src={team.logo} 
                alt={`${team.name} logo`} 
                className="w-full h-full object-contain"
              />
            </div>
            
            <div>
              <h1 className="text-4xl font-bold mb-2">{team.name}</h1>
              <p className="text-xl mb-6">{team.country}</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-white/10 p-4 rounded-lg">
                  <div className="flex items-center text-champions-gold mb-1">
                    <Trophy className="h-5 w-5 mr-2" />
                    <span className="font-medium">CL Wins</span>
                  </div>
                  <p className="text-2xl font-bold">{team.clWins}</p>
                </div>
                
                <div className="bg-white/10 p-4 rounded-lg">
                  <div className="flex items-center text-champions-gold mb-1">
                    <Calendar className="h-5 w-5 mr-2" />
                    <span className="font-medium">Founded</span>
                  </div>
                  <p className="text-2xl font-bold">{team.foundedYear}</p>
                </div>
                
                <div className="bg-white/10 p-4 rounded-lg">
                  <div className="flex items-center text-champions-gold mb-1">
                    <MapPin className="h-5 w-5 mr-2" />
                    <span className="font-medium">Stadium</span>
                  </div>
                  <p className="text-xl font-bold truncate">{team.stadium}</p>
                </div>
                
                <div className="bg-white/10 p-4 rounded-lg">
                  <div className="flex items-center text-champions-gold mb-1">
                    <Users className="h-5 w-5 mr-2" />
                    <span className="font-medium">Coach</span>
                  </div>
                  <p className="text-xl font-bold truncate">{team.coach}</p>
                </div>
              </div>
              
              <div className="bg-white/10 p-4 rounded-lg">
                <h2 className="text-xl font-bold mb-2 text-champions-gold">Current Form</h2>
                <div className="flex items-center space-x-6">
                  <div className="text-center">
                    <p className="text-sm text-slate-300">Played</p>
                    <p className="text-2xl font-bold">{team.played}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-slate-300">Won</p>
                    <p className="text-2xl font-bold">{team.won}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-slate-300">Drawn</p>
                    <p className="text-2xl font-bold">{team.drawn}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-slate-300">Lost</p>
                    <p className="text-2xl font-bold">{team.lost}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-slate-300">Points</p>
                    <p className="text-2xl font-bold">{team.points}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto py-12 px-4">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Club History</h2>
          <div className="prose prose-lg max-w-none">
            <p>{team.history}</p>
          </div>
        </div>
        
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Squad</h2>
          {players.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {players.map(player => (
                <PlayerCard key={player.id} player={player} />
              ))}
            </div>
          ) : (
            <p className="text-slate-600">No player information available for this team.</p>
          )}
        </div>
        
        <div>
          <h2 className="text-3xl font-bold mb-6">Fixtures & Results</h2>
          {matches.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {matches.map(match => (
                <MatchCard key={match.id} match={match} />
              ))}
            </div>
          ) : (
            <p className="text-slate-600">No fixture information available for this team.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamDetails;