import React from 'react';
import UserWantedGame from './UserWantedGame'
import UserGame from './UserGame'

class User extends React.Component{
    render(){
        const {details} = this.props;
        return(
            <li>
                <h3>{details.name}</h3>
                <span>{details.gender}</span>
                {/* add validation to use nice icons or something like that */}
                <h2>UserWantedGames</h2>
                {
                    Object
                        .keys(details.wantedgames)
                        .map(key => <UserWantedGame key={key} index={key} details={details.wantedgames[key]}/>)
                }
                <h2>UserGames</h2>
                {
                    Object
                        .keys(details.games)
                        .map(key => <UserGame key={key} index={key} details={details.games[key]}/>)
                }
            </li>
        )
    }
}

export default User;