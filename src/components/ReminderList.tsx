import React from 'react';
import Reminder from '../models/Reminders';



interface ReminderListProps{
    items: Reminder[];
    onRemoveReminder: (id:number) => void;
}

function ReminderList({items,onRemoveReminder}: ReminderListProps) {
    return (
        <ul className='list-group'>
            {items.map(item => <li className='list-group-item' key={item.id}>
                {item.title}
                <button onClick={() => onRemoveReminder(item.id)} className="btn btn-outline-danger mx-5 rounded-pill">Delete</button>
                </li>)}
        </ul>
    );
}

export default ReminderList;