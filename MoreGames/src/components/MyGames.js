import React from 'react';
import AddGameForm from './AddGameForm';
//import myGamesList from '../sample-games';

class MyGames extends React.Component{
    constructor() {
        super(); 
        this.addGameToMyGames = this.addGameToMyGames.bind(this);
        this.toggleHidden = this.toggleHidden.bind(this);
        this.onClick = this.onClick.bind(this);
        this.state = {
            isHidden: true,
            games: {},
        }
    }
    addGameToMyGames(game){
        const games = {...this.state.games};
        const timeStamp = Date.now();
        games[`game-${timeStamp}`] = game;
        this.setState({games: games });
    }
    toggleHidden(){
        this.setState({
            isHidden: !this.state.isHidden
        })
    }
    onClick(event){
        const newItemState = this.state.games;
        this.props.loadSamples(newItemState);
        this.props.toggleHiddenMyGames();
    }
    render(){
        return(
            <div>
                <h2>MyGames</h2>
                <button onClick={this.onClick}>Load MyGames</button>
                <button onClick={this.toggleHidden}>Add</button>
                {!this.state.isHidden && <AddGameForm addGameToMyGames={this.addGameToMyGames}/>}
            </div>
        );
    }
}

export default MyGames;