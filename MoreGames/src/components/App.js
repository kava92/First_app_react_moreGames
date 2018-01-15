import React from 'react';
import WantedGames from './WantedGames';
import MyGames from './MyGames';
import Game from './Game';
import GamesOnExchange from './GamesOnExchange';
import UsersList from './UsersList'
import myGamesList from '../sample-games';
import wantedGamesList from '../sample-wanted-games';
import usersList from '../users-list';
import User from './User';
import WantedGame from './WantedGame';
import GameExchangeAble from './GameExchangeAble';
// import FindGame from './FindGame';

class App extends React.Component{
    constructor(){
        super();
        this.toggleHiddenMyGames = this.toggleHiddenMyGames.bind(this);
        this.toggleHiddenWantedGames = this.toggleHiddenWantedGames.bind(this);
        this.toggleHiddenGamesOnExchange = this.toggleHiddenGamesOnExchange.bind(this);
        this.toggleHiddenUserList = this.toggleHiddenUserList.bind(this);
        this.loadWantedGames = this.loadWantedGames.bind(this);
        this.loadUserList = this.loadUserList.bind(this);
        this.loadSamples = this.loadSamples.bind(this);
        this.loadGamesOnExchange = this.loadGamesOnExchange.bind(this);
        this.updateSearch = this.updateSearch.bind(this);

        this.state = {
            allgames: {},
            games: {},
            wantedGames: {},
            userList: {},
            search: '',
            isHiddenMyGames: true,
            isHiddenWantedGames: true,
            isHiddenGamesOnExchange: true,
            isHiddenUserList: true,
        }
    }
    componentWillMount(nextProps, nextState){
        localStorage.setItem('myGamesList',JSON.stringify(myGamesList));
        localStorage.setItem('wantedGameList',JSON.stringify(wantedGamesList));
        localStorage.setItem('userList',JSON.stringify(usersList));
    }
    toggleHiddenMyGames(){
        this.setState({
            isHiddenMyGames: !this.state.isHiddenMyGames
        })
    }
    toggleHiddenWantedGames(){
        this.setState({
            isHiddenWantedGames: !this.state.isHiddenWantedGames
        })
    }
    toggleHiddenGamesOnExchange(){
        this.setState({
            isHiddenGamesOnExchange: !this.state.isHiddenGamesOnExchange
        })
    }
    toggleHiddenUserList(){
        this.setState({
            isHiddenUserList: !this.state.isHiddenUserList
        })
    }
    updateSearch(event){
        this.setState({
            search: event.target.value.substr(0,100)});
    }
    loadSamples(newItemState){
        var statusGameList = localStorage.getItem('myGamesList');
        const numberOfGames = Object.keys(newItemState).length;  
        console.log(numberOfGames);
            if(numberOfGames === 0){
                statusGameList = JSON.parse(statusGameList);
                console.log(statusGameList);
                this.setState({
                    games: statusGameList, 
                })
                return
            }
            else{
                statusGameList = JSON.parse(statusGameList);
                for(var nameGame in newItemState){
                    if(newItemState.hasOwnProperty(nameGame)){
                        statusGameList[nameGame] = newItemState[nameGame];
                    }
                }
                console.log(statusGameList);
                localStorage.setItem('myGamesList',JSON.stringify(statusGameList));
                //console.log(statusGameList);
                this.setState({
                    games:{...statusGameList},
                })
            }
            
    }
    loadWantedGames(wantedItemsState){
        var statusWantedGamesList = localStorage.getItem('wantedGameList');
        const numberOfGames = Object.keys(wantedItemsState).length;
        if(numberOfGames === 0){
            statusWantedGamesList = JSON.parse(statusWantedGamesList);
            this.setState({
                wantedGames: statusWantedGamesList 
            })
            return
        }
        else{
            statusWantedGamesList = JSON.parse(statusWantedGamesList);
            for(var nameGame in wantedItemsState){
                if(wantedItemsState.hasOwnProperty(nameGame)){
                    statusWantedGamesList[nameGame] = wantedItemsState[nameGame];
                }
            }
            localStorage.setItem('wantedGameList',JSON.stringify(statusWantedGamesList));
            this.setState({
                wantedGames:{...statusWantedGamesList},
            })

        }
        
    }
    loadGamesOnExchange(){
        var statusGamesOnExchange = localStorage.getItem('userList');
        statusGamesOnExchange = JSON.parse(statusGamesOnExchange);
        var allGames=[];
        for(var user in statusGamesOnExchange){
            if(statusGamesOnExchange.hasOwnProperty(user)){
                var valuesOfUser = Object.values(statusGamesOnExchange[user]);
                allGames.push(valuesOfUser[2]);
                var usersGames=[];
            }
            for (var gamesUser in allGames){
                if(allGames.hasOwnProperty(gamesUser)){
                    var valuesOfGames = Object.values(allGames[gamesUser]);
                }
                for( var i = 0;i<valuesOfGames.length;i++){
                    usersGames.push(valuesOfGames[i]);
                }
            }
        }
        const games = {};
        for(var j = 0; j < usersGames.length; j++){
            var game = {};
            game['name'] = usersGames[j];
            games[`game${j}`] = game;
        }
        this.setState({
            allgames:{...games}
        })
        
    }

    loadUserList(userListState){
        var statusUserList = localStorage.getItem('userList');
        const numberOfUsers = Object.keys(userListState).length;
        if(numberOfUsers === 0){
            statusUserList = JSON.parse(statusUserList);
            this.setState({
                userList: statusUserList,
            })
            return
        }else{
            statusUserList = JSON.parse(statusUserList);
            for(var user in userListState){
                if(userListState.hasOwnProperty(user)){
                    statusUserList[user] = statusUserList[user];
            }
        }
        localStorage.setItem('UserList',JSON.stringify(statusUserList));
        this.setState({
            userList:{...statusUserList},
        })


        }
    }

    render(){    
        var allGames = this.state.allgames;
        var filter = Object.keys(this.state.allgames)
        .filter(key =>{ return this.state.allgames[key].name.indexOf(this.state.search) !== -1 })
        return(
            <div>
                <MyGames toggleHiddenMyGames={this.toggleHiddenMyGames} loadSamples={this.loadSamples} />
                {/* <AddGameForm addGameToMyGames={this.addGameToMyGames}/> */}
                <ul>
                    {!this.state.isHiddenMyGames &&
                        Object
                            .keys(this.state.games)
                            .map(key => <Game key={key} index={key} details={this.state.games[key]} allGames={allGames}  />)
                    }
                </ul>
                <WantedGames toggleHiddenWantedGames={this.toggleHiddenWantedGames} loadWantedGames={this.loadWantedGames} />
                <ul>
                    {!this.state.isHiddenWantedGames &&
                        Object
                            .keys(this.state.wantedGames)
                            .map(key => <WantedGame key={key} index={key} details={this.state.wantedGames[key]}/>)
                    }

                </ul>
                <GamesOnExchange updateSearch={this.updateSearch} toggleHiddenGamesOnExchange={this.toggleHiddenGamesOnExchange} loadGamesOnExchange={this.loadGamesOnExchange} />
                <ul>
                    <form>  
                        <input type="text"
                        value={this.state.search}
                        onChange={this.updateSearch} />
                    </form>
                    {!this.state.isHiddenGamesOnExchange &&
                                filter
                                .map((key, index) => {
                                    return <div key={key}>
                                    <GameExchangeAble details={this.state.allgames[key].name} />
                                    </div>
                                })
                    }                
                    
                </ul>
                <UsersList toggleHiddenUserList={this.toggleHiddenUserList} loadUserList={this.loadUserList} userList={this.state.userList} />
                <ul>
                    {!this.state.isHiddenUserList &&
                        Object
                            .keys(this.state.userList)
                            .map(key => <User key={key} index={key} details={this.state.userList[key]}/>)
                    }
                </ul>
                        
            </div>
        )
    }
}

export default App;