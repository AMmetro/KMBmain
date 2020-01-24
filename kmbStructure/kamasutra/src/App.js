import React from "react";
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music';
import MyNews from './components/News/MyNews';
import Settings from './components/Settings/Settings';
import Footer from "./components/Footer/Footer";
import {BrowserRouter, Route} from "react-router-dom";


const App = (props) => {

    return (

            <div className='app-wrapper'>

                <Header/>
                <Navbar/>

                <div className='app-wrapper-content'>
                    <Route path='/Profile' render={ ()=> <Profile profilePage={props.state.profilePage}/> }/>
                    <Route path='/Dialogs' render={ ()=> <Dialogs dialogsPage={props.state.dialogsPage}/> }/>
                    <Route path='/News' component={MyNews}/>
                    <Route path='/Music' component={Music}/>
                    <Route path='/Settings' component={Settings}/>
                </div>

                <Footer/>

            </div>


    )
};
export default App;