// create deck of cards
// suite, rank, title, score
var prompt = require('prompt');

prompt.start();

    // prompt username
    function usernamePrompt() {
        prompt.get([{
            name: ['username', 'username2']
        }], function(err, result){

        console.log('Player Ready:');
        console.log('username one:' + result.username);
        console.log('username two:' + result.username2)
        let username = result.username
        let username2 = result.username2

        const playerOne = new Player(prompt.username)
        const playerTwo = new Player(prompt.username2)

        console.log(playerOne)
        console.log(playerTwo)
        });
    }


module.exports.usernamePrompt = usernamePrompt

