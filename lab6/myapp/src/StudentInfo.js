import React from 'react';
import Switch from "./Switch"

const StudentInfo = ({ student, setStudent }) => {
  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };
  
  return (
    <div className="student-info">
      <label>ФИО студента: <input name="fullName" value={student.fullName} onChange={handleChange} /></label><br/>
      <label>Дата рождения: <input name="birthDate" type="date" value={student.birthDate} onChange={handleChange} /></label><br/>
      <label>Год поступления: <input name="admissionYear" type="number" value={student.admissionYear} onChange={handleChange} /></label><br/>
      <label>Факультет: <input name="faculty" value={student.faculty} onChange={handleChange} /></label><br/>
      <label>Группа: <input name="group" value={student.group} onChange={handleChange} /></label><br/>
      <label>Специальность: <input name="specialty" value={student.specialty} onChange={handleChange} /></label><br/>
      <label>Электронная почта: <input name="email" type="email" value={student.email} onChange={handleChange} /></label><br/>
      <label ><Switch></Switch></label>

      
    </div>
  );
};

export default StudentInfo;
