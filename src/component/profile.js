import React, {Component} from 'react'


class Profile  extends Component {
constructor(){
    super()
    this.state ={
    Profession:'full stack js developer'
    }
}
render() { 
    let Profession = this.state.Profession

    return (
    <div className="App">
        <img src="shape2.jpg"alt='userphoto' style={{width:"280px"}}/>
        <h4>{Profession}</h4>

        </div>
    );
}
}

export default Profile ;