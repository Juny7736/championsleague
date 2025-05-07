import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Layout from './components/Layout';

// Pages
import Home from './pages/Home';
import Teams from './pages/Teams';
import TeamDetails from './pages/TeamDetails';
import Players from './pages/Players';
import PlayerDetails from './pages/PlayerDetails';
import Fixtures from './pages/Fixtures';
import Statistics from './pages/Statistics';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/teams/:id" element={<TeamDetails />} />
          <Route path="/players" element={<Players />} />
          <Route path="/players/:id" element={<PlayerDetails />} />
          <Route path="/fixtures" element={<Fixtures />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;