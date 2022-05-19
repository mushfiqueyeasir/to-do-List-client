import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';


const NavBar = ({ notifications, email }) => {

    let user = useAuthState(auth);

    const handleSignout = () => {
        signOut(auth);
    }


    return (

        <div className='bg-gray-900'>
            <div className="navbar bg-gray-900 container mx-auto">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl text-white">To-DO-List</a>
                </div>
                <div className="flex-none">

                    {
                        user[0] ?
                            <div className="dropdown dropdown-end">
                                <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user[0].photoURL ? user[0].photoURL : 'https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745'} />
                                    </div>
                                </label>
                                <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                                    <li><button onClick={handleSignout}>Logout</button></li>
                                </ul>
                            </div>
                            :
                            <>
                                <Link to='/login' className='btn text-white bg-gray-900 '>Login</Link>
                            </>
                    }



                </div>
            </div>
        </div>
    );
};

export default NavBar;