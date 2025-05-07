import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface StatsCardProps {
  title: string;
  data: Array<{
    name: string;
    value: number;
    color?: string;
  }>;
  dataKey?: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, data, dataKey = 'value' }) => {
  return (
    <div className="card p-4">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical" margin={{ left: 20, right: 20 }}>
            <CartesianGrid strokeDasharray="3 3" horizontal={false} />
            <XAxis type="number" />
            <YAxis type="category" dataKey="name" tick={{ fontSize: 12 }} width={100} />
            <Tooltip 
              formatter={(value: number) => [`${value}`, '']}
              labelFormatter={(name) => `${name}`}
            />
            <Bar 
              dataKey={dataKey} 
              fill="#1E3A8A"
              barSize={20}
              radius={[0, 4, 4, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default StatsCard;