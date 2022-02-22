import { useState } from 'react';

import Form from '../Form/Form';
import './App.css';

// dummy member data:
const initialMembers = [
  { name: "Marsha Muckers",
    email: "marmuckers@aol.com",
    role: "QA"
  },
  { 
    name: "Roger Rickums",
    email: "rrrrickums@yoohoo.com",
    role: "Frontend Engineer"
  }
]


function App() {
  const [members, setMembers] = useState(initialMembers);

  const addNewMember = (newMember) => {
    setMembers([...members, newMember]);
  }

  return (
    <div className="App">
      <header>
        <h1>Team Members</h1>
      </header>
      <section className="members">
        {members.map(member => {
          return (
            <div key={member.name} className="member">
              <h2>{member.name}</h2>
              <p>{member.email}</p>
              <p>{member.role}</p>
            </div>
          )
        })}
      </section>
      <Form addNewMember={addNewMember}/>
    </div>
  );
}

export default App;
