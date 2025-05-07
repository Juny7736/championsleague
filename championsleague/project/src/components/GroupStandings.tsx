import React from 'react';
import { TeamStanding } from '../types';

interface GroupStandingsProps {
  groupName: string;
  teams: TeamStanding[];
}

const GroupStandings: React.FC<GroupStandingsProps> = ({ groupName, teams }) => {
  return (
    <div className="card overflow-hidden">
      <div className="bg-champions-blue text-white p-3">
        <h3 className="font-semibold">Group {groupName}</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="bg-slate-50">
              <th className="py-3 px-4 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                Team
              </th>
              <th className="py-3 px-4 text-center text-xs font-medium text-slate-500 uppercase tracking-wider">
                P
              </th>
              <th className="py-3 px-4 text-center text-xs font-medium text-slate-500 uppercase tracking-wider">
                W
              </th>
              <th className="py-3 px-4 text-center text-xs font-medium text-slate-500 uppercase tracking-wider">
                D
              </th>
              <th className="py-3 px-4 text-center text-xs font-medium text-slate-500 uppercase tracking-wider">
                L
              </th>
              <th className="py-3 px-4 text-center text-xs font-medium text-slate-500 uppercase tracking-wider">
                GF
              </th>
              <th className="py-3 px-4 text-center text-xs font-medium text-slate-500 uppercase tracking-wider">
                GA
              </th>
              <th className="py-3 px-4 text-center text-xs font-medium text-slate-500 uppercase tracking-wider">
                GD
              </th>
              <th className="py-3 px-4 text-center text-xs font-medium text-slate-500 uppercase tracking-wider">
                Pts
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {teams.map((team, index) => (
              <tr 
                key={team.id} 
                className={index < 2 ? 'bg-green-50' : ''}
              >
                <td className="py-3 px-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-8 w-8">
                      <img className="h-8 w-8" src={team.logo} alt={team.name} />
                    </div>
                    <div className="ml-3">
                      <div className="text-sm font-medium text-slate-900">{team.name}</div>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-4 whitespace-nowrap text-sm text-slate-900 text-center">
                  {team.played}
                </td>
                <td className="py-3 px-4 whitespace-nowrap text-sm text-slate-900 text-center">
                  {team.won}
                </td>
                <td className="py-3 px-4 whitespace-nowrap text-sm text-slate-900 text-center">
                  {team.drawn}
                </td>
                <td className="py-3 px-4 whitespace-nowrap text-sm text-slate-900 text-center">
                  {team.lost}
                </td>
                <td className="py-3 px-4 whitespace-nowrap text-sm text-slate-900 text-center">
                  {team.goalsFor}
                </td>
                <td className="py-3 px-4 whitespace-nowrap text-sm text-slate-900 text-center">
                  {team.goalsAgainst}
                </td>
                <td className="py-3 px-4 whitespace-nowrap text-sm text-slate-900 text-center">
                  {team.goalDifference}
                </td>
                <td className="py-3 px-4 whitespace-nowrap text-sm font-bold text-slate-900 text-center">
                  {team.points}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GroupStandings;