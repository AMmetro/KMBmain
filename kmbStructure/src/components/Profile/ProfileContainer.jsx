import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {geUsertProfile, SetUserProfileActionCreater} from "../../redux/profile-reducer";
import {withRouter} from "react-router";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";




class ProfileContainer extends React.Component {

    componentDidMount() {

        let userId=this.props.match.params.userId;
        if (!userId) {
            userId=2
        }
        this.props.geUsertProfile(userId);
                 }

    render() {

        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}


let mapStateToProps = (state)=> ({
    profile: state.profilePage.profile,
});

export default compose(
    connect (mapStateToProps, {SetUserProfileActionCreater,geUsertProfile}),
     withRouter,
         withAuthRedirect
        )  (ProfileContainer);