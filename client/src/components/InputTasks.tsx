import React, { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom'

const InputTasks = () => {
    const [sub_task_name, setTaskName] = useState('')
    const navigate = useNavigate()

    const onSubmitForm = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        try {
            const body = {sub_task_name};
            const response = await fetch('http://localhost:4000/subtasks', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(body)
            })

            navigate('/tasks')

        } catch (error: any) {
            console.error(error.message)
        } 
    }

    return (
        <Fragment>
            <h1 className='text-center mt-5'>Checkmate Tasks</h1>
            <form className='d-flex' onSubmit={onSubmitForm}>
                <input type='text' className='form-control' value={sub_task_name} onChange={e => setTaskName(e.target.value)} />
                <button className='btn btn-dark'>Add</button>
            </form>
        </Fragment>
    )
}

export default InputTasks