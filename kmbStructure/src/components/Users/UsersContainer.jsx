import React from "react";
import Users from "../Users/Users"
import {connect} from "react-redux";
import Preloader from "../Common/Preloader/Preloader"
import * as axios from "axios";
import {
    follow, getUsersTC, setCurrentPage, setTotalUsersCount, setUsers,
    toggleFollowInProgres, toggleIsFetching, unfollow
} from "../../redux/users-reducer";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";



class UsersContainer extends React.Component {


    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage,this.props.pageSize);
        // this.props.toggleIsFetching (true);
        // userAPI.getUsers (this.props.currentPage,this.props.pageSize )
        //
        //     .then(data => {
        //         this.props.setUsers(data.items);
        //         this.props.setTotalUsersCount(data.totalCount);
        //         this.props.toggleIsFetching (false);
        //                      });
    };

    onPageChanged = (pageNumber) => {

        this.props.getUsersTC(pageNumber,this.props.pageSize);


       //  this.props.toggleIsFetching (true);
       //  this.props.setCurrentPage(pageNumber);
       //
       // userAPI.getUsers (pageNumber,this.props.pageSize )
       //      .then(data => {
       //          this.props.setUsers(data.items);
       //          this.props.toggleIsFetching (false);
       //      });
    };


render () {

 return <>
            {this.props.isFetching ? <Preloader/>: null}

 <Users totalUserCount={this.props.totalUserCount}
               pageSize={this.props.pageSize}
               currentPage={this.props.currentPage}
               onPageChanged={this.onPageChanged}
               users={this.props.users}
               follow={this.props.follow}
                unfollow={this.props.unfollow}
               isFetching={this.props.isFetching}
        toggleFollowInProgres={this.props.toggleFollowInProgres} />
 </>
 }
}
 //-----------------------------------------------------------------------------------------------------

   let mapStateToProps = (state) => {
        return {
            users: state.usersPage.users,
            pageSize: state.usersPage.pageSize,
            totalUserCount: state.usersPage.totalUserCount,
            currentPage: state.usersPage.currentPage,
            isFetching: state.usersPage.isFetching,
            followInProgres : state.usersPage.followInProgres,
        }
    };



//!


export default compose (
    withAuthRedirect,
    connect (mapStateToProps,{follow,unfollow,setUsers,setCurrentPage,
     setTotalUsersCount,toggleIsFetching,toggleFollowInProgres,
     getUsersTC} ))
(UsersContainer)



// export default connect (mapStateToProps,{follow,unfollow,setUsers,setCurrentPage,
//     setTotalUsersCount,toggleIsFetching,toggleFollowInProgres,
//     getUsersTC} )(UsersContainer);

// export default withAuthRedirect (connect(mapStateToProps,{follow,unfollow,setUsers,setCurrentPage,
//     setTotalUsersCount,toggleIsFetching,toggleFollowInProgres,
//     getUsersTC} )(UsersContainer));


    // let mapDispatchToProps = (dispatch) => {
    //     return {follow: (userId) => {dispatch(followAC(userId));         },
    //         unfollow: (userId) => { dispatch(unfollowAC(userId));  },
    //         setUsers: (users) => {dispatch(setUsersAC(users)); },
    //         setCurrentPage: (pageNumber) => { dispatch(setCurrentPageAC(pageNumber));   },
    //         setTotalUsersCount: (totalCount) => { dispatch(setTotalUsersCountAC(totalCount)); },
    //         toggleIsFetching: (isFetching) => { dispatch(toggleIsFetchingAC(isFetching));  }
    //     }
    // };

// export default connect (mapStateToProps, mapDispatchToProps)(UsersContainer);





