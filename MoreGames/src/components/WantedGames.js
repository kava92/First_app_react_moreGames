import React from 'react';
import AddWantedGameForm from './AddWantedGameForm';
//import myGamesList from '../sample-games';

class WantedGames extends React.Component{
    constructor(){
        super();
        this.addGameToWantedGames = this.addGameToWantedGames.bind(this);
        this.toggleHidden = this.toggleHidden.bind(this);
        this.onClick = this.onClick.bind(this);
        this.state = {
            isHidden: true,
            wantedGames: {},
        }

    }
    addGameToWantedGames(wantedGame){
        const wantedGames = {...this.state.wantedGames};
        const timeStamp = Date.now()
        wantedGames[`wantedGame-${timeStamp}`] = wantedGame;
        this.setState({ wantedGames: wantedGames });
    }
    toggleHidden(){
        this.setState({
            isHidden: !this.state.isHidden
        })
    }
    onClick(event){
        const wantedItemsState = this.state.wantedGames;
        this.props.loadWantedGames(wantedItemsState);
        this.props.toggleHiddenWantedGames();
    }
    render(){
        return(
            <div>
                <h2>WantedGames</h2>
                <button onClick={this.onClick}>Load WantedGames</button>
                <button onClick={this.toggleHidden}>Add</button>
                {!this.state.isHidden && <AddWantedGameForm addGameToWantedGames={this.addGameToWantedGames}/>}
            </div>
        )
    }

}

export default WantedGames;