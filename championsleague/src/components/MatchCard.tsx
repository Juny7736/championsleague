import React from 'react';
import { Match } from '../types';

interface MatchCardProps {
  match: Match;
}

const MatchCard: React.FC<MatchCardProps> = ({ match }) => {
  const isLive = match.status === 'live';
  const isCompleted = match.status === 'completed';
  const isUpcoming = match.status === 'upcoming';

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
  };

  return (
    <div className="card overflow-hidden">
      <div className="p-4">
        <div className="flex justify-between items-center mb-3">
          <div className="text-sm text-slate-500">{match.stage}</div>
          <div>
            {isLive && (
              <span className="badge bg-red-100 text-red-800 flex items-center">
                <span className="h-2 w-2 bg-red-600 rounded-full mr-1 animate-pulse"></span>
                LIVE
              </span>
            )}
            {isCompleted && <span className="badge badge-secondary">Completed</span>}
            {isUpcoming && (
              <span className="badge bg-slate-100 text-slate-800">
                {formatDate(match.date)} - {formatTime(match.date)}
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between my-4">
          <div className="flex items-center space-x-3">
            <img src={match.homeTeam.logo} alt={match.homeTeam.name} className="w-10 h-10" />
            <span className="font-semibold">{match.homeTeam.name}</span>
          </div>
          <div className="text-center">
            {isCompleted || isLive ? (
              <div className="flex items-center space-x-2">
                <span className="text-xl font-bold">{match.homeScore}</span>
                <span className="text-sm text-slate-400">-</span>
                <span className="text-xl font-bold">{match.awayScore}</span>
              </div>
            ) : (
              <span className="text-sm font-medium text-slate-500">vs</span>
            )}
          </div>
          <div className="flex items-center space-x-3 justify-end">
            <span className="font-semibold">{match.awayTeam.name}</span>
            <img src={match.awayTeam.logo} alt={match.awayTeam.name} className="w-10 h-10" />
          </div>
        </div>

        <div className="text-sm text-center text-slate-500">
          {match.stadium}, {match.location}
        </div>
      </div>
    </div>
  );
};

export default MatchCard;