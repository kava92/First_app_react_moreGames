import React from 'react';

class UsersList extends React.Component{
    constructor(){
        super();
        this.toggleHidden = this.toggleHidden.bind(this);
        this.onClick = this.onClick.bind(this);
        this.state = {
            isHidden: true,
            userList: {},
        }
    }
    toggleHidden(){
        this.setState({
            isHidden: !this.state.isHidden
        })
    }
    onClick(event){
        this.props.toggleHiddenUserList();
        const userListState = this.state.userList;
        this.props.loadUserList(userListState);
    }
    render(){
        return(
            <div>
                <h2>UserList</h2>
                <button onClick={this.onClick}>LoadsUserList</button>
                {!this.state.isHidden}
            </div>
        )
    }
}

export default UsersList;