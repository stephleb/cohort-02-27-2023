/*
Input: Teams array containing team objects


let teams = [
  {
    name: "Lakers",
    city: "Los Angeles",
    players: ["Lebron James", "Russell Westbrook", "Anthony Davis"],
    championships: 20
  },
  {
    name: "Warriors",
    city: "San Franscisco",
    players: ["Steph Curry", "Klay Thompson", "Andrew Wiggins"],
    championships: 5
  }
  {
    name: "Knicks",
    city: "New York",
    players: ["Carmelo", "Marbury"],
    championships: 3

  }
  {
    name: "Nets",
    city: "New York",
    players: ["Kyrie Irving", "Kevin Durant"],
    championships: 0
  }
]

Write a function that returns a team that matches the given city and player

1. should return null if a team cannot be found by city
2. should return null if a team cannot be found by player
3. should return the team if its matching a city and contains the given player

*/
let teams = [
  {
    name: "Lakers",
    city: "Los Angeles",
    players: ["Lebron James", "Russell Westbrook", "Anthony Davis"],
    championships: 20
  },
  {
    name: "Warriors",
    city: "San Franscisco",
    players: ["Steph Curry", "Klay Thompson", "Andrew Wiggins"],
    championships: 5
  },
  {
    name: "Knicks",
    city: "New York",
    players: ["Carmelo", "Marbury"],
    championships: 3
  },
  {
    name: "Nets",
    city: "New York",
    players: ["Kyrie Irving", "Kevin Durant"],
    championships: 0
  }
]


function findTeamByCityAndPlayer(teams=[], city, player) {
  //guard clause
  if(!teams.length || !city || !player) return null;
  //looked at the city of each team in the teams array
  for(let teamObj of teams){
    //if the city matches, then look at the teams's players array and see if that players array contains the inputPlayer
    if(teamObj.city === city){
      //if the team that belongs to given city has the given player in its players array, then return the team 
      if(teamObj.players.includes(player)) return teamObj;
    }
  }

  return null;
	
}

// console.log(findTeamByCityAndPlayer(teams, "New York", "Kevin Durant"))



/*
Input: Team will be an object, cities will be an object


// Team object
let newTeam = {
  name: "Clippers",
  city: "Los Angeles",
  players: ["Kawhi Leonard", "Paul George"],
  championships: 1
}


Cities Object
let cities_usa = {
  "Los Angeles": {
    totalNumberOfPlayers: 3,
    numberOfChampionships: 20,
    teams: ["Lakers"]
  },
  "New York": {
    totalNumberOfPlayers: 4,
    numberOfChampionships: 3,
    teams: ["Knicks", "Nets"]
  },
  "San Franscisco": {
    totalNumberOfPlayers: 3,
    numberOfChampionships: 5,
    teams: ["Warriors"]
  }
}


Add a city from a given team to a given collection of cities and update the cities collection objects info

1. If called with only a team and no cities object, then use an empty object
2. If the given team's city is not in the cities object yet, then create a new key in the cities object with the given team's city and give it keys for numberOfPlayers, numberOfChampionships, and teams 
3. If the cities object already has a city that matches the given team, then update the cities object at that city key to update the number of players, number of championships and add to that cities teams array the given team

*/

let newTeam = {
  name: "Clippers",
  city: "Los Alamo",
  players: ["Kawhi Leonard", "Paul George"],
  championships: 1
}

let cities_usa = {
  "Los Angeles": {
    totalNumberOfPlayers: 3,
    numberOfChampionships: 20,
    teams: ["Lakers"]
  },
  "New York": {
    totalNumberOfPlayers: 4,
    numberOfChampionships: 3,
    teams: ["Knicks", "Nets"]
  },
  "San Franscisco": {
    totalNumberOfPlayers: 3,
    numberOfChampionships: 5,
    teams: ["Warriors"]
  }
}

function addCityToCities(team, cities={}) {
	const {city, name, players, championships} = team;

  //check if the cities collection contains a key matching the teams city
  // const citiesList = Object.keys(cities);
  // console.log(citiesList.includes(city))

  //console.log(cities[city]) //this will be undefined if the city is not in cities object. If it is in the object, it will give back the value at that city

  if(cities[city] !== undefined){
    //update the value at cities[city]
    const matchingCity = cities[city]
    matchingCity.totalNumberOfPlayers += players.length;
    matchingCity.numberOfChampionships += championships
    matchingCity.teams.push(name)
  }else{
    //if the team's city is not in the cities object we will create a new key with the team's city and set it equal to an object
    cities[city] = {
      totalNumberOfPlayers: players.length,
      numberOfChampionships: championships,
      teams: [name]
    }
  }

  return cities
}

// console.log(addCityToCities(newTeam, cities_usa))




function calculateTotalChampionships(cities={}) {
	
}





/*

1. should return null if the cities is empty
2. should return a receipt of all items in the cart
3. example input:

let cities_usa = {
  "Los Angeles": {
    totalNumberOfPlayers: 3,
    numberOfChampionships: 20,
    teams: ["Lakers"]
  },
  "New York": {
    totalNumberOfPlayers: 4,
    numberOfChampionships: 3,
    teams: ["Knicks", "Nets"]
  },
  "San Franscisco": {
    totalNumberOfPlayers: 3,
    numberOfChampionships: 5,
    teams: ["Warriors"]
  }
}

//example output: "Los Angeles has 20 championships and the following teams: Lakers\n New York has 3 championships and the following teams: Knicks, Nets\n San Franscisco has 5 championships and the following teams: Warriors \n Total Championships: 28"

*/
function printInfo(cities={}) {
	
}


// console.log(printInfo(cities_usa))