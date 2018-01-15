import React from 'react';
//import { render } from 'react-dom';

class Welcome extends React.Component{
    goToStore(event){
        event.preventDefault();
        this.context.router.transitionTo('/myGames');
    }

    render(){
        return(
            <div>
                <h1>Lets exchange your games!</h1>
                <p>by 434585</p>
                <button onClick={(e) => this.goToStore(e)}>Click me!</button>
            </div>
        );
    }
}

Welcome.contextTypes = {
    router: React.PropTypes.object
}

export default Welcome;