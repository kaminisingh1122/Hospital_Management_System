import React from "react";
import { useEffect } from "react";

import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import AddNewAdmin from "./components/AddNewAdmin";
import AddNewDocter from "./components/AddNewDocter";
import Messages from "./components/Messages";
import Docters from "./components/Docters";
import Sidebar from "./components/Sidebar";
import { Context } from "./index";
import { useContext } from "react";
import axios from "axios";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
const App = ()=>{

    const { isAuthenticated, setIsAuthenticated,  setUser } =
    useContext(Context);
    useEffect(()=>{
        const fetchUser = async()=>{
            try {
                const response = await axios.get("http://localhost:4000/api/v1/user/admin/me",{
                    withCredentials:true,
                });
                setIsAuthenticated(true);
                setUser(response.data.user);

            } catch (error) {
                setIsAuthenticated(false);
                setUser({});
                
            }
        }
        fetchUser();
         // eslint-disable-next-line
    },[isAuthenticated]);


    return(
        <>
        <Router>
            <Routes>
                <Route path="/dashboard" element={<Dashboard/>} />
                <Route path="/login" element={<Login/>}/>
                <Route path="/admin/addnew" element={<AddNewAdmin/>}/>
                <Route path="/docter/addnew" element={<AddNewDocter/>}/>
                <Route path="/messages" element={<Messages/>}/>
                <Route path="/docters" element={<Docters/>}/>
                <Route path="/" element={<Sidebar/>}/>
            </Routes>
            <ToastContainer position="top-center" />
        </Router>
        </>
    );
}

export default App;