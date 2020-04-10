import React from 'react';
import sss from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";



class ProfileStatus extends React.Component {

    state= {editMode: false}


    activateEditMode(){

        this.setState({editMode:true})
      
        // this.forceUpdate()
    }

    render () {

     // {if (!this.props.profile) {return <Preloader/>  }   }         // почему зацикливается постоянно?



        return (

            <div className={sss.ProfileStatus}>

              {  !this.state.editMode==true &&  <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>}

                { this.state.editMode==true &&  <input value={this.props.status}></input>    }

            </div>
        )
    }
}



export default ProfileStatus;








