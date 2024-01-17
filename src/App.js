
import './App.css';

import {Routes, Route } from 'react-router-dom';
import AllMeetups from './pages/AllMeetups';
import Favorites from './pages/Favorites';
import NewMeetups from './pages/NewMeetup';
function App() {
  //localhost:3000
  //after deployment -->my-page.com
 
  return (
    
    <div>
    <Routes>
      <Route path="/" element={<AllMeetups />} />
      <Route path="/new-meetup" element={<NewMeetups />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  </div>
  );
}

export default App;
