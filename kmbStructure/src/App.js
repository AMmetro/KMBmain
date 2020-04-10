import React from "react";
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
// import ProfileContainer from './components/Profile/Profile';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import Login from './components/Login/Login';
import Music from './components/Music/Music';
import MyNews from './components/News/MyNews';
import Settings from './components/Settings/Settings';
import Footer from "./components/Footer/Footer";
import {BrowserRouter, Route} from "react-router-dom";
import ProfileContainer from "./components/Profile/ProfileContainer";




const App = (props) => {

       return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>

                <div className='app-wrapper-content'>

                    <Route path='/Profile/:userId?' render={ ()=> <ProfileContainer store={props.store} /> }/>

                    <Route path='/Dialogs' render={ ()=> <DialogsContainer store={props.store}  /> } />

                    <Route path='/Users' render={ ()=> <UsersContainer />  } />

                    <Route path='/News' component={MyNews}/>

                    <Route path='/Music' component={Music}/>

                    <Route path='/Settings' component={Settings}/>

                    <Route path='/Login' component={Login}/>

                </div>

                <Footer/>


            </div>


    )
};
export default App;

