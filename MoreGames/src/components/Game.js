import React from 'react';

class Game extends React.Component {
    constructor(){
        super();
        this.checkIfGameIsWanted = this.checkIfGameIsWanted.bind(this);
    }
    checkIfGameIsWanted(){
        const { details } = this.props;
        const allGames = this.props.allGames;
        var keys = Object.keys(allGames);
        var checkIf = keys.map(keys => {if(allGames[keys].name === details.name)
                                            return details.name});
        var wantedGames = [];
        for(var i = 0; i<checkIf.length; i++){
            if(checkIf[i] !== undefined){
                wantedGames.push(checkIf[i])
            }
        }
        return wantedGames;
    }

    render() {
        const { details } = this.props;
        var wantedGames = this.checkIfGameIsWanted();
        let button = null;
        if (wantedGames.includes(details.name)){
            button = <button>U can exchange this game!</button>
        }
        return (
            <div>
                <img src={details.image} alt={details.name} />
                <h3>{details.name}</h3>
                {button}
                <div>{details.desc}</div>
                <span>{details.developer}</span>
                <span>{details.status}</span>
            </div>
        )
    }
}

export default Game;