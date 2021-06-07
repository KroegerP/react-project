import { useState } from 'react';
import Tasks from './Tasks';
import AddTask from './AddTask';

const History = () => {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Appointment',
            desc: 'asfsadfasd',
            reminder: true,
        },
        {
            id: 2,
            text: 'Lunch',
            desc: 'At noon',
            reminder: true,
        },
        {
            id: 3,
            text: 'Volleyball',
            desc: 'Thursday',
            reminder: true,
        },
    ])

    const deleteTask = (id) => {
        console.log('delete', id)
        setTasks(tasks.filter((task) => task.id !== id))
    }

    const toggleReminder = (id) => {
        console.log('reminder', id)
        setTasks(tasks.map((task) => task.id === id ? {
            ...task, reminder: !task.reminder
        } : task
        ))
    }

    const addTask = (task) => {
        console.log(task)
        const id = Math.floor(Math.random() * 10000) + 1
        const newTask = { id, ...task }
        setTasks([...tasks, newTask])
    }

    return (
        <div>
            <AddTask onAdd={addTask} />
            {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
            ) : (
                    <h3>No Tasks to Show</h3>
                )
            }
        </div>
    );
}
            
export default History;