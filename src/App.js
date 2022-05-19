import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import RequireAuth from "./component/Auth/RequireAuth";
import UserAuth from "./component/Auth/UserAuth";
import Error from "./component/Error/Error";
import Login from "./component/Login/Login";
import NavBar from "./component/NavBar/NavBar";
import Register from "./component/Register/Register";
import ToDoList from "./component/ToDoList/ToDoList";




function App() {



  return (
    <div >
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={
          <RequireAuth>
            <ToDoList ></ToDoList>
          </RequireAuth>
        }></Route>


        <Route path="/login" element={
          <UserAuth>
            <Login></Login>
          </UserAuth>

        }
        ></Route>

        <Route path="/register" element={
          <UserAuth>
            <Register></Register>
          </UserAuth>
        }></Route>

        <Route path='*' element={<Error></Error>}></Route>



      </Routes>


    </div>
  );
}

export default App;
