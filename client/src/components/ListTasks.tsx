import React, { Fragment, useEffect, useState } from 'react';
import EditTasks from './EditTasks';

interface Task {
    sub_task_id: number;
    sub_task_name: string;
}

const ListTasks = () => {
    const [tasks, setTasks] = useState<Task[]>([]);

    //delete function
    const deleteTask = async (id: number) => {
        try {
            const deleteTask = await fetch(`http://localhost:4000/subtasks/${id}`, {
                method: 'DELETE'
            });
            setTasks(tasks.filter(task => task.sub_task_id !== id))
        } catch (error: any) {
            console.error(error.message)
        }
    }

    const getTasks = async () => {
        try {
            const response = await fetch('http://localhost:4000/subtasks')
            const jsonData = await response.json()

            setTasks(jsonData)
        } catch (error: any) {
            console.error(error.message)
        }
    }

    useEffect(() => {
        getTasks();
    }, [])

    return (
    <Fragment>
        <table className="table">
            <thead>
            <tr>
                <th>Task Name</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
            {/* <tr>
                <td>John</td>
                <td>Doe</td>
                <td>john@example.com</td>
            </tr> */}
            {tasks.map(task => (
                <tr key={task.sub_task_id}>
                    <td>{task.sub_task_name}</td>
                    <td><EditTasks task={task} /></td>
                    <td><button className='btn btn-danger' onClick={() => deleteTask(task.sub_task_id)}>Delete</button></td>
                </tr>
            ))}
            </tbody>
        </table>
    </Fragment>
    )
}

export type {Task}

export default ListTasks