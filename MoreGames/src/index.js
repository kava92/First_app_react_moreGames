import React from 'react';
import App from './components/App';
import Welcome from './components/Welcome';
import NotFound from './components/NotFound';
import { render } from 'react-dom';
import { BrowserRouter, Miss, Match} from 'react-router';

const Root = () =>{
    return(
        <BrowserRouter>
            <div>
                <Match exactly pattern="/" component={Welcome} />
                <Match pattern="/myGames" component={App} />
                <Miss component={NotFound}/>
            </div>
        </BrowserRouter>
    )
}

render(<Root />, document.querySelector('#main'));