/*
    Team Stats
    We want to create, retrieve and add information about your favorite sports team. Basketball, soccer, tennis,
    or water polo, you pick it.
    It's your job to create data using the javaScript data structures at your disposal: arrays and objects.

    After we create these data structures in this project, feel free to challenge yourself to gain insigths from them. 
    For example, you migth want to get the total number of games your team has played or the average scorer of all of their games.
 */

    const team = {
        _players: [
            {firstName: 'Elif', lastName: 'Tok', age: 20},
            {firstName: 'Emre', lastName: 'Tok', age: 14},
            {firstName: 'Alex', lastName: 'Tok', age: 10}
        ],
        _games: [
            {opponent: 'Sefiller', teamPoints: '11', opponentPoints: '1'},
            {opponent: 'Kaplanlar', teamPoints: '10', opponentPoints: '12'},
            {opponent: 'Horozlar', teamPoints: '2', opponentPoints: '5'}
        ],
        get players(){
            return this._players;
        },
        get games(){
            return this._games;
        },
        addPlayer(newFirstName, newLastName, newAge) {
            let player = {
                firstName: newFirstName,
                lastName: newLastName,
                age: newAge        
            };
            this.players.push(player); 
        },
        addGame(newOpponent, newTeamPoints, newOpponentPoints){
            let game = {
                opponent: newOpponent,
                teamPoints: newTeamPoints,
                opponentPoints: newOpponentPoints
            };
            this.games.push(game);
        }
    };

    team.addPlayer('Bugs', 'Bunny', 70);
    console.log(team.players);

    team.addGame('Titans', 100, 98);
    console.log(team.games);