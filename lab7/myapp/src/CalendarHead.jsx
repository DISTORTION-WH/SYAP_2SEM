import React, { useState } from 'react';

const CalendarHead = ({ setDate, noteDate }) => {
    const [date, changeDate] = useState(new Date());
    const dayNames = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
    const monthNames = [
        "Январь",
        "Февраль",
        "Mарт",
        "Aпрель",
        "Mай",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь"];



    const previous = () => {
        let currentDate = new Date(date.getFullYear(), date.getMonth() - 1);
        changeDate(currentDate);
        setDate(currentDate);
    };

    const next = () => {
        let currentDate = new Date(date.getFullYear(), date.getMonth() + 1);
        changeDate(currentDate);
        setDate(currentDate);
    };

    return (
        <>
            <thead>
                <tr>
                    <td colSpan={2}> сегодня: {new Date().getDate()} </td>
                    <td colSpan={3}> {monthNames[date.getMonth()]+" "} {date.getFullYear()} </td>
                    <td> <button onClick={previous}>{"<"}</button>
                    </td>
                    <td>
                        <button onClick={next}>{">"}</button>
                    </td>
                </tr>

                <tr> {dayNames.map((name) => (<td key={name}>{name}</td>))}
                </tr>
            </thead>
        </>);
}
export default CalendarHead