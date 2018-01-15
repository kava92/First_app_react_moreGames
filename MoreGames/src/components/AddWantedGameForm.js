import React from 'react';

class AddWantedGameForm extends React.Component{
    createWantedGame(event){
        event.preventDefault();
        const wantedGame = {
            name: this.name.value,
            image: this.image.value,
            desc: this.desc.value,
            developer: this.developer.value,
            status: this.status.value,
        }
        this.props.addGameToWantedGames(wantedGame);
        this.wantedGameForm.reset();
    }

    render(){
        return(
            <form ref={(input) => this.wantedGameForm=input} onSubmit={(e) => this.createWantedGame(e)}>
                <input ref={(input) => this.name=input} type="text" placeholder="Game Name" />
                <input ref={(input) => this.image=input} type="text" placeholder="Game Img(url)" />
                <select ref={(input) => this.status=input}>
                    <option value="available">Exchangeable</option>
                    <option value="available">Unexchangeable</option>
                </select>
                <textarea ref={(input) => this.desc=input} type="text" placeholder="Game Description" />
                <input ref={(input) => this.developer=input} type="text" placeholder="Game Developer" />
                <button type="submit">+ Add Game!</button>
            </form>
        )
    }
}

export default AddWantedGameForm;