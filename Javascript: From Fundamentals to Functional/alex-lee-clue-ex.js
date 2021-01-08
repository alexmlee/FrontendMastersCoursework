
// const clueGame = {}

// clueGame["players"] = []

// clueGame.players
// clueGame.players.push({name: "Mrs. White", location: "Library", color: "white"})
// clueGame.solution = { location: "Conservatory", weapon: "Candlestick", person: "Mr. Green" }
// clueGame.players.push( {name: "Mr. Green", location: "Hall", color: "green"} )
// clueGame['weapons'] = ['candlestick', 'revolver', 'rope']

gameObject = { "name": "Rusty", "room": "kitchen", "weapon": "candlestick"}
let { weapon, room } = gameObject;
const game = {
  'suspects': [
    {
      name:"Rusty",
      color: "orange"
    },
    {
      name: "Miss Scarlet",
      color: "red"
    }
  ]
}
function loopThroughSuspects() {
  for (const suspect of game.suspects) {
    console.log(suspect);
  }
}
loopThroughSuspects()
function loopThroughSuspectsAndProperties() {
  for (suspect of game.suspects) {
    for (property in suspect) {
      console.log(suspect[property]);
    }
    if (suspect.color == 'red') {
      suspect.guilty = true;
    }
  }
}
loopThroughSuspectsAndProperties();

function CreateSuspectObjects(name) {
  return {
    name: name,
    color:  name.split(' ')[1],
    speak() { console.log(`my name is ${this.name}`);}
  };
};

var suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr. White'];

var suspectList = []; 

_ = {}

_.each = function(collection, callback) {
  for (item of collection) {
    callback(item);
  }
}
_.each(suspects, (suspect) => {
  suspectList.push(CreateSuspectObjects(suspect));
});