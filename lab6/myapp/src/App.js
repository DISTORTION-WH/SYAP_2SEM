import React, { useState } from 'react';
import StudentInfo from './StudentInfo';
import StudentInfoHandler from './StudentInfoHandler';
import Notes from './Notes';
import Switch from "./Switch"

const App = () => {
  const [student, setStudent] = useState({
    fullName: '',
    birthDate: '',
    admissionYear: '',
    faculty: '',
    group: '',
    specialty: '',
    email: '',
    phoneNumber: '',
  });

  return (
    <div className="app">
      <StudentInfo student={student} setStudent={setStudent} />
      
      <StudentInfoHandler student={student} />
    
      <Notes />
    
    </div>
  );
};

export default App;
