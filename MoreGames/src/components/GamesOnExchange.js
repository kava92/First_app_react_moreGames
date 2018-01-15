import React from 'react';

class GamesOnExchange extends React.Component{
    constructor(){
        super();
        this.toggleHidden = this.toggleHidden.bind(this);
        this.onClick = this.onClick.bind(this);
        this.state = {
            isHidden: true,
        }
    }
    toggleHidden(){
        this.setState({
            isHidden: !this.state.isHidden
        })
    }
    onClick(event){
        this.props.loadGamesOnExchange();
        this.props.toggleHiddenGamesOnExchange();
    }

    render(){
        return(
            <div>
                <h2>GamesOnExchange</h2>
                <button onClick={this.onClick}>LoadGamesOnExchange</button>
                {!this.state.isHidden }
               
            </div>
        )
    }
}

export default GamesOnExchange;