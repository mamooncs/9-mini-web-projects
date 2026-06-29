const team = {

    _players: [

        {
            firstName: 'LeBron',
            lastName: 'James',
            age: 39
        },

        {
            firstName: 'Stephen',
            lastName: 'Curry',
            age: 37
        },

        {
            firstName: 'Kevin',
            lastName: 'Durant',
            age: 37
        }

    ],

    _games: [

        {
            opponent: 'Warriors',
            teamPoints: 110,
            opponentPoints: 105
        },

        {
            opponent: 'Lakers',
            teamPoints: 98,
            opponentPoints: 95
        },

        {
            opponent: 'Celtics',
            teamPoints: 120,
            opponentPoints: 118
        }

    ],

    get players() {
        return this._players;
    },

    get games() {
        return this._games;
    },

    addPlayer(newFirstName, newLastName, newAge) {

        const player = {

            firstName: newFirstName,
            lastName: newLastName,
            age: newAge

        };

        this._players.push(player);

    },

    addGame(newOpponent, newTeamPoints, newOpponentPoints) {

        const game = {

            opponent: newOpponent,
            teamPoints: newTeamPoints,
            opponentPoints: newOpponentPoints

        };

        this._games.push(game);

    }

};

team.addPlayer(
    'Bugs',
    'Bunny',
    76
);

team.addGame(
    'Titans',
    100,
    98
);

function showStats() {

    let playerList = '';

    team.players.forEach(player => {

        playerList += `
            <li>
                ${player.firstName}
                ${player.lastName}
                (${player.age})
            </li>
        `;

    });

    let gameList = '';

    team.games.forEach(game => {

        gameList += `
            <li>
                vs ${game.opponent}
                | ${game.teamPoints}
                - ${game.opponentPoints}
            </li>
        `;

    });

    document.getElementById('output').innerHTML =

    `
        <h2>Players</h2>

        <ul>
            ${playerList}
        </ul>

        <br>

        <h2>Games</h2>

        <ul>
            ${gameList}
        </ul>
    `;
}