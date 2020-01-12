import React from "react";
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import MyNews from './components/News/MyNews';
import {BrowserRouter, Route} from "react-router-dom";

const App = () => {


    return (
        <BrowserRouter>
            <div className='app-wrapper'>

                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/Dialogs' component={Dialogs}/>
                    <Route path='/Profile' component={Profile}/>
                    <Route path='/News' component={MyNews}/>
                </div>
            </div>
        </BrowserRouter>
    )
};
export default App;