import axios from 'axios';
import React from 'react';
import Swal from 'sweetalert2';
import useSingleTask from '../../hooks/useSingleTask';

const Task = ({ task, setNotification }) => {
    const item = useSingleTask(task._id);
    const temp = item[0];

    const handleDelete = (event) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
                console.log(event.target.parentNode.parentNode.parentNode.parentNode.classList.add('hidden'));
                axios.delete(`https://to-do-list-113.herokuapp.com/taskList/${event.target.parentNode.parentNode.parentNode.parentNode.id}`)
            }
        })
    }

    const handleCompleted = (event) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Completed!',
                    'success'
                )
                event.target.classList.add('hidden');
                temp.completed = "true";
                delete temp._id;
                axios.put(`https://to-do-list-113.herokuapp.com/taskList/${event.target.parentNode.parentNode.parentNode.parentNode.id}`, temp);

            }

        })

    }



    return (
        <div className="card bg-base-100 shadow-xl mb-5" id={task._id}>
            <div className="card-body flex flex-row justify-between">
                <div>
                    <h2 className={task.completed === 'false' ? 'card-title' : 'card-title line-through'}>{task.subject}</h2>
                    <p className={task.completed === 'false' ? '' : 'line-through'}>{task.description}</p>
                </div>
                <div className='flex gap-2'>
                    <button onClick={handleDelete} className="btn btn-circle bg-red-500 border-0 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                    {
                        task.completed === 'false' ?
                            <button onClick={handleCompleted} className="btn btn-circle bg-green-700 border-0 text-2xl text-white">
                                <i class="fa-solid fa-check"></i>
                            </button>
                            :
                            <></>

                    }

                </div>

            </div>
        </div>
    );
};

export default Task;