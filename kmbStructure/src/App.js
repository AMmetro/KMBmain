import React, {Component} from "react";
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
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {connect} from "react-redux";
import {getAuthUserData, logout, setAuthUserData} from "./redux/auth-reducer";
import mapStateToProps from "react-redux/src/connect/mapStateToProps";
import {compose} from "redux";
import {initializedApp} from "./redux/app-reducer";
import Preloader from "./components/Common/Preloader/Preloader";


class App extends Component {
       componentDidMount() {
           this.props.initializedApp();
      };

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }


        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>

                <div className='app-wrapper-content'>

                    <Route path='/Profile/:userId?' render={() => <ProfileContainer store={this.props.store}/>}/>

                    <Route path='/Dialogs' render={() => <DialogsContainer store={this.props.store}/>}/>

                    <Route path='/Users' render={() => <UsersContainer/>}/>

                    <Route path='/News' component={MyNews}/>

                    <Route path='/Music' component={Music}/>

                    <Route path='/Settings' component={Settings}/>

                    <Route path='/Login' component={Login}/>

                </div>

                <Footer/>


            </div>


        )
    }
}

const MapStateToProps =  (state) => ({
    initialized: state.App.initialized
})


export default compose (
    withRouter,
    connect(MapStateToProps,{initializedApp})) (App);        //withRouter что бы не глючило - это типа баг




