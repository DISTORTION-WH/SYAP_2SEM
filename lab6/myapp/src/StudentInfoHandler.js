import React, { useState, useEffect } from 'react';
import PhoneInput from './PhoneInput';
import Switch from "./Switch"


const StudentInfoHandler = ({ student }) => {
  const [age, setAge] = useState(0);
  const [course, setCourse] = useState('');
  const [emailOperator, setEmailOperator] = useState('');
  const [phoneOperator, setPhoneOperator] = useState('');
  const [phone, setPhone] = useState('');


  useEffect(() => {
 const Phone = () => {
  return document.getElementsByTagName('PhoneInput');
 }

    const calculateAge = (birthDate) => {
      const currentDate = new Date();
      const birth = new Date(birthDate);
      let age = currentDate.getFullYear() - birth.getFullYear();
      const monthDiff = currentDate.getMonth() - birth.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < birth.getDate())) {
        age--;
      }
      return age;
    };

    const calculateCourse = (admissionYear) => {
      const currentYear = new Date().getFullYear();
      const course = currentYear - admissionYear;
      return course > 4 ? 'Окончил университет' : course;
    };

    const getEmailOperator = (email) => {
      return email.split('@')[1];
    };

    const getPhoneOperator = (phoneNumber) => {
        const numberPattern = /^(\+375|80)(29|33|25|17|44)(\d{7})$/;
        const match = phoneNumber.match(numberPattern);
        if (match) {
          const operatorCode = match[2];
          switch (operatorCode) {
            case '29':
            case '44':
              return 'A1 (Velcom)';
            case '33':
              return 'МТС';
            case '25':
              return 'life:)';
            case '17':
              return 'Белтелеком (городской)';
            default:
              return 'Неизвестный оператор';
          }
        } else {
          return 'Некорректный номер';
        }
      };
    setPhone(Phone());
    setAge(calculateAge(student.birthDate));
    setCourse(calculateCourse(student.admissionYear));
    setEmailOperator(getEmailOperator(student.email));
    setPhoneOperator(getPhoneOperator(student.phoneNumber));
  }, [student]);

  return (
    <div className="student-info-handler">
      <table>
        <tbody>
          <tr>
            <td>ФИО</td>
            <td>{student.fullName}</td>
          </tr>
          <tr>
            <td>Текущий возраст студента</td>
            <td>{age} лет</td>
          </tr>
          <tr>
            <td>Факультет, курс, группа</td>
            <td>{student.faculty}, {course}, {student.group}</td>
          </tr>
          <tr>
            <td>Специальность</td>
            <td>{student.specialty}</td>
          </tr>
          <tr>
            <td>Электронная почта</td>
            <td>{student.email}</td>
          </tr>
          <tr>
            <td>Оператор услуг электронной почты</td>
            <td>{emailOperator}</td>
          </tr>
          <tr>
            <td>Номер телефона</td>
            <td>{phone}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StudentInfoHandler;

           
