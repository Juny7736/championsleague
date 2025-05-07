import React from 'react';
import { Link } from 'react-router-dom';
import { Player } from '../types';

interface PlayerCardProps {
  player: Player;
}

const PlayerCard: React.FC<PlayerCardProps> = ({ player }) => {
  return (
    <Link to={`/players/${player.id}`} className="block">
      <div className="card overflow-hidden group">
        <div className="h-56 relative">
          <img
            src={player.image}
            alt={`${player.name} photo`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-bold text-lg">{player.name}</h3>
              <p className="text-slate-500 text-sm">{player.position}</p>
            </div>
            <div className="flex items-center space-x-1">
              <img
                src={player.teamLogo}
                alt={player.teamName}
                className="w-6 h-6 object-contain"
              />
              <span className="text-sm text-slate-600">{player.teamName}</span>
            </div>
          </div>
          <div className="grid grid-cols-3 text-center text-sm border-t border-slate-100 mt-3 pt-3">
            <div>
              <p className="text-slate-500">Goals</p>
              <p className="font-semibold">{player.goals}</p>
            </div>
            <div>
              <p className="text-slate-500">Assists</p>
              <p className="font-semibold">{player.assists}</p>
            </div>
            <div>
              <p className="text-slate-500">Apps</p>
              <p className="font-semibold">{player.appearances}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PlayerCard;