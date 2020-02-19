import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import MemberForm from './components/MemberForm';
import Member from './components/Member';
import data from './data';

function App() {
  const [teams, setTeams] = useState([
  {
    id: 1,
    name: "Kaylen Milliner",
    email: "kmilliner@gmail.com",
    role: "Software Developer"
  }
]);

  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };
    setTeams([...teams, newMember]);
  };

  return (
    <div className="App">
      <h1>The Team</h1>
      <MemberForm addNewMember={addNewMember} />
      <Member teams={teams} />
    </div>
  );
};

export default App;
