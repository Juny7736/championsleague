import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Flag, User, Calendar, Clock, Trophy } from 'lucide-react';
import { getPlayerById } from '../data/players';

const PlayerDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const player = getPlayerById(id || '');
  
  if (!player) {
    return (
      <div className="container mx-auto py-12 px-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Player not found</h2>
          <Link to="/players" className="text-primary-600 hover:underline">
            Back to Players
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
            to="/players" 
            className="inline-flex items-center text-white hover:text-champions-gold transition mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Players
          </Link>
          
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="w-60 h-60 rounded-lg overflow-hidden flex-shrink-0">
              <img 
                src={player.image} 
                alt={`${player.name}`} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex-grow">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <h1 className="text-4xl font-bold">{player.name}</h1>
                <Link 
                  to={`/teams/${player.teamId}`} 
                  className="flex items-center bg-white/10 px-3 py-1 rounded hover:bg-white/20 transition"
                >
                  <img src={player.teamLogo} alt={player.teamName} className="w-5 h-5 mr-2" />
                  <span>{player.teamName}</span>
                </Link>
              </div>
              <p className="text-xl mb-6">{player.position}</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-white/10 p-4 rounded-lg">
                  <div className="flex items-center text-champions-gold mb-1">
                    <Flag className="h-5 w-5 mr-2" />
                    <span className="font-medium">Nationality</span>
                  </div>
                  <p className="text-xl font-bold">{player.nationality}</p>
                </div>
                
                <div className="bg-white/10 p-4 rounded-lg">
                  <div className="flex items-center text-champions-gold mb-1">
                    <Calendar className="h-5 w-5 mr-2" />
                    <span className="font-medium">Age</span>
                  </div>
                  <p className="text-2xl font-bold">{player.age}</p>
                </div>
                
                <div className="bg-white/10 p-4 rounded-lg">
                  <div className="flex items-center text-champions-gold mb-1">
                    <User className="h-5 w-5 mr-2" />
                    <span className="font-medium">Position</span>
                  </div>
                  <p className="text-xl font-bold">{player.position}</p>
                </div>
                
                <div className="bg-white/10 p-4 rounded-lg">
                  <div className="flex items-center text-champions-gold mb-1">
                    <Clock className="h-5 w-5 mr-2" />
                    <span className="font-medium">Appearances</span>
                  </div>
                  <p className="text-2xl font-bold">{player.appearances}</p>
                </div>
              </div>
              
              <div className="bg-white/10 p-4 rounded-lg">
                <h2 className="text-xl font-bold mb-2 text-champions-gold">2025 Champions League Stats</h2>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  <div className="text-center">
                    <p className="text-sm text-slate-300">Goals</p>
                    <p className="text-2xl font-bold">{player.goals}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-slate-300">Assists</p>
                    <p className="text-2xl font-bold">{player.assists}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-slate-300">Minutes</p>
                    <p className="text-2xl font-bold">{player.minutesPlayed}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-slate-300">Yellow Cards</p>
                    <p className="text-2xl font-bold">{player.yellowCards}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-slate-300">Red Cards</p>
                    <p className="text-2xl font-bold">{player.redCards}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto py-12 px-4">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Player Biography</h2>
          <div className="prose prose-lg max-w-none">
            <p>{player.biography}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Trophy className="mr-2 h-5 w-5 text-champions-gold" /> Career Achievements
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-champions-gold rounded-full mt-2 mr-2"></span>
                <span>UEFA Champions League Finalist 2023</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-champions-gold rounded-full mt-2 mr-2"></span>
                <span>Domestic League Champion (3x)</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-champions-gold rounded-full mt-2 mr-2"></span>
                <span>Domestic Cup Winner (2x)</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-champions-gold rounded-full mt-2 mr-2"></span>
                <span>International Appearances: 45</span>
              </li>
            </ul>
          </div>
          
          <div className="card p-6">
            <h3 className="text-xl font-bold mb-4">Playing Style</h3>
            <p className="text-slate-700 mb-4">
              {player.name} is known for their exceptional {player.position === 'Forward' ? 'finishing ability and movement in the final third' : player.position === 'Midfielder' ? 'vision, passing range, and ability to control the tempo of the game' : 'defensive awareness, tackling, and aerial dominance'}.
            </p>
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-slate-100 p-3 rounded-lg text-center">
                <div className="font-bold text-lg text-champions-blue">88</div>
                <div className="text-xs text-slate-500">Pace</div>
              </div>
              <div className="bg-slate-100 p-3 rounded-lg text-center">
                <div className="font-bold text-lg text-champions-blue">92</div>
                <div className="text-xs text-slate-500">Shooting</div>
              </div>
              <div className="bg-slate-100 p-3 rounded-lg text-center">
                <div className="font-bold text-lg text-champions-blue">85</div>
                <div className="text-xs text-slate-500">Passing</div>
              </div>
              <div className="bg-slate-100 p-3 rounded-lg text-center">
                <div className="font-bold text-lg text-champions-blue">90</div>
                <div className="text-xs text-slate-500">Dribbling</div>
              </div>
              <div className="bg-slate-100 p-3 rounded-lg text-center">
                <div className="font-bold text-lg text-champions-blue">75</div>
                <div className="text-xs text-slate-500">Defending</div>
              </div>
              <div className="bg-slate-100 p-3 rounded-lg text-center">
                <div className="font-bold text-lg text-champions-blue">82</div>
                <div className="text-xs text-slate-500">Physical</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerDetails;