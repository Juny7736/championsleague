/*
  # Create tables for Champions League tracker

  1. New Tables
    - `teams`
      - `id` (uuid, primary key)
      - `name` (text)
      - `country` (text)
      - `logo` (text)
      - `group` (text)
      - Other team-related fields
    - `players`
      - `id` (uuid, primary key)
      - `name` (text)
      - `team_id` (uuid, foreign key)
      - Other player-related fields
    - `matches`
      - `id` (uuid, primary key)
      - `home_team_id` (uuid, foreign key)
      - `away_team_id` (uuid, foreign key)
      - `status` (text)
      - Other match-related fields

  2. Security
    - Enable RLS on all tables
    - Add policies for public read access
*/

-- Create teams table
CREATE TABLE teams (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  country text NOT NULL,
  logo text NOT NULL,
  "group" text NOT NULL,
  cl_wins integer DEFAULT 0,
  played integer DEFAULT 0,
  won integer DEFAULT 0,
  drawn integer DEFAULT 0,
  lost integer DEFAULT 0,
  points integer DEFAULT 0,
  founded_year integer NOT NULL,
  stadium text NOT NULL,
  coach text NOT NULL,
  history text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create players table
CREATE TABLE players (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  position text NOT NULL,
  nationality text NOT NULL,
  age integer NOT NULL,
  team_id uuid REFERENCES teams(id),
  image text NOT NULL,
  goals integer DEFAULT 0,
  assists integer DEFAULT 0,
  appearances integer DEFAULT 0,
  minutes_played integer DEFAULT 0,
  yellow_cards integer DEFAULT 0,
  red_cards integer DEFAULT 0,
  biography text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create matches table
CREATE TABLE matches (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  home_team_id uuid REFERENCES teams(id),
  away_team_id uuid REFERENCES teams(id),
  date timestamptz NOT NULL,
  stage text NOT NULL,
  status text NOT NULL,
  home_score integer DEFAULT 0,
  away_score integer DEFAULT 0,
  stadium text NOT NULL,
  location text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE teams ENABLE ROW LEVEL SECURITY;
ALTER TABLE players ENABLE ROW LEVEL SECURITY;
ALTER TABLE matches ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Allow public read access on teams"
  ON teams FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow public read access on players"
  ON players FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow public read access on matches"
  ON matches FOR SELECT
  TO public
  USING (true);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
CREATE TRIGGER update_teams_updated_at
  BEFORE UPDATE ON teams
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_players_updated_at
  BEFORE UPDATE ON players
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_matches_updated_at
  BEFORE UPDATE ON matches
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();