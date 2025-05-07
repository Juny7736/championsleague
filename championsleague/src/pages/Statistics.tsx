import React from 'react';
import HeroSection from '../components/HeroSection';
import StatsCard from '../components/StatsCard';
import GroupStandings from '../components/GroupStandings';
import { getTopScorers, getTopAssists } from '../data/players';
import { teams } from '../data/teams';

const Statistics: React.FC = () => {
  const topScorers = getTopScorers(10);
  const topAssists = getTopAssists(10);

  const scorerData = topScorers.map(player => ({
    name: player.name,
    value: player.goals,
  }));

  const assistData = topAssists.map(player => ({
    name: player.name,
    value: player.assists,
  }));

  // Group teams by their group
  const groupedTeams = teams.reduce((acc, team) => {
    if (!acc[team.group]) {
      acc[team.group] = [];
    }
    acc[team.group].push({
      id: team.id,
      name: team.name,
      logo: team.logo,
      played: team.played,
      won: team.won,
      drawn: team.drawn,
      lost: team.lost,
      goalsFor: 10, // Mock data
      goalsAgainst: 5, // Mock data
      goalDifference: 5, // Mock data
      points: team.points,
    });
    
    // Sort teams by points (descending)
    acc[team.group].sort((a, b) => b.points - a.points);
    
    return acc;
  }, {} as Record<string, any[]>);

  return (
    <div>
      <HeroSection
        title="Statistics"
        subtitle="Explore detailed statistics from the 2025 UEFA Champions League"
        backgroundImage="https://images.pexels.com/photos/10299440/pexels-photo-10299440.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />
      
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">Group Standings</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {Object.entries(groupedTeams).map(([group, teams]) => (
              <GroupStandings key={group} groupName={group} teams={teams} />
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">Top Goal Scorers</h2>
              <StatsCard title="Goals" data={scorerData} />
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">Top Assists</h2>
              <StatsCard title="Assists" data={assistData} />
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Tournament Records</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-champions-blue">Most Goals in a Match</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded">
                    <div className="flex items-center">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg" 
                        alt="Manchester City" 
                        className="w-6 h-6 mr-2"
                      />
                      <span>Erling Haaland</span>
                    </div>
                    <span className="font-bold">4 goals</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded">
                    <div className="flex items-center">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg" 
                        alt="Real Madrid" 
                        className="w-6 h-6 mr-2"
                      />
                      <span>Kylian Mbappé</span>
                    </div>
                    <span className="font-bold">3 goals</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3 text-champions-blue">Fastest Goals</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded">
                    <div className="flex items-center">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg" 
                        alt="Real Madrid" 
                        className="w-6 h-6 mr-2"
                      />
                      <span>Jude Bellingham</span>
                    </div>
                    <span className="font-bold">42 seconds</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded">
                    <div className="flex items-center">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg" 
                        alt="Bayern Munich" 
                        className="w-6 h-6 mr-2"
                      />
                      <span>Jamal Musiala</span>
                    </div>
                    <span className="font-bold">68 seconds</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3 text-champions-blue">Clean Sheets</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded">
                    <div className="flex items-center">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg" 
                        alt="Manchester City" 
                        className="w-6 h-6 mr-2"
                      />
                      <span>Manchester City</span>
                    </div>
                    <span className="font-bold">3</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded">
                    <div className="flex items-center">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg" 
                        alt="Bayern Munich" 
                        className="w-6 h-6 mr-2"
                      />
                      <span>Bayern Munich</span>
                    </div>
                    <span className="font-bold">2</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Statistics;