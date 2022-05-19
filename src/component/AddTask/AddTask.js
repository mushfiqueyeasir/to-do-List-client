import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import auth from '../../firebase.init';

const AddTask = () => {
    const user = useAuthState(auth);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || '/';



    const handleAddTask = event => {
        event.preventDefault();

        const url = `https://to-do-list-113.herokuapp.com/taskList`;


        const task = {
            subject: event.target.subject.value,
            description: event.target.description.value,
            email: user[0].email,
            completed: "false"
        }
        axios.post(url, task)
            .then(result => {

                Swal.fire({
                    title: 'Success!',
                    text: 'New Product Added',
                    icon: 'success',
                    confirmButtonText: 'Ok!'
                })
                navigate(from, { replace: true });
            }

            )
    }
    return (
        <div>
            <input type="checkbox" id="addTaskModal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">

                    <div className="flex justify-between">
                        <h3 className="font-bold text-lg"></h3>
                        <label htmlFor="addTaskModal" className="btn btn-sm btn-circle  text-white absolute right-2 top-2 border-0">✕</label>
                    </div>
                    <form onSubmit={handleAddTask} className='grid grid-cols-1 gap-3 justify-items-center mt-3'>

                        <h3 className="text-lg font-bold">Add Task</h3>

                        <input name="subject" type="text" placeholder="subject" className="input input-bordered input-accent w-full max-w-xs border-gray-300 focus:outline-none " required />

                        <textarea name='description' className="textarea textarea-bordered w-full max-w-xs " placeholder="Description"></textarea>


                        <input htmlFor='addTaskModal' type="Submit" defaultValue='ADD' className="btn text-white w-full max-w-xs" />

                    </form>
                </div>

            </div>


        </div>
    );
};

export default AddTask;