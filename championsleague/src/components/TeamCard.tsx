import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { Team } from '../types';

interface TeamCardProps {
  team: Team;
}

const TeamCard: React.FC<TeamCardProps> = ({ team }) => {
  return (
    <Link to={`/teams/${team.id}`} className="block">
      <div className="card overflow-hidden group">
        <div className="h-48 relative">
          <img
            src={team.logo}
            alt={`${team.name} logo`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-team-card-gradient flex items-end p-4">
            <div>
              <h3 className="text-white font-bold text-xl">{team.name}</h3>
              <p className="text-slate-200 text-sm">{team.country}</p>
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="flex justify-between items-center mb-2">
            <div className="badge badge-primary">{team.group}</div>
            <div className="flex items-center">
              {Array.from({ length: team.clWins }).map((_, i) => (
                <Star key={i} className="w-4 h-4 text-champions-gold" fill="#D4AF37" />
              ))}
              {Array.from({ length: 5 - team.clWins }).map((_, i) => (
                <Star key={i + team.clWins} className="w-4 h-4 text-slate-300" />
              ))}
            </div>
          </div>
          <div className="grid grid-cols-3 text-center text-sm border-t border-slate-100 pt-2">
            <div>
              <p className="text-slate-500">Played</p>
              <p className="font-semibold">{team.played}</p>
            </div>
            <div>
              <p className="text-slate-500">Won</p>
              <p className="font-semibold">{team.won}</p>
            </div>
            <div>
              <p className="text-slate-500">Points</p>
              <p className="font-semibold">{team.points}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TeamCard;