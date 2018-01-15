import React from 'react';

class GameExchangeAble extends React.Component {
    render() {
        const { details } = this.props;
        return (
            <div>
               <h2>{details}</h2> 
            </div>
        )
    }
}

export default GameExchangeAble;

//do zrobienia