import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useTask from '../../hooks/useTask';
import AddTask from '../AddTask/AddTask';
import Task from '../Task/Task';

const ToDoList = () => {
    const [user, loading] = useAuthState(auth);
    const url = `https://to-do-list-113.herokuapp.com/taskList/?email=${user.email}`;
    const [tasks, setTasks] = useTask(url)

    return (
        <div className='container mx-auto'>
            <div className='flex justify-end p-3'>
                <label htmlFor="addTaskModal" className="btn btn-circle border-0 bg-blue-500 text-3xl text-white">
                    <i class="fa-solid fa-plus"></i>
                </label>

            </div>
            <AddTask />
            {
                tasks.length === 0 ?
                    <>
                        <div className='flex flex-col justify-center items-center h-[80vh]'>
                            <h1 className='text-9xl text-center text-gray-400 '> <i class="fa-solid fa-list-check"></i></h1>
                            <h1 className='text-5xl text-center font-bold text-gray-700'>ADD Task</h1>

                        </div>

                    </>
                    :
                    <></>
            }

            {
                tasks.map(task => <Task key={task._id} task={task} />)
            }

        </div >
    );
};

export default ToDoList;