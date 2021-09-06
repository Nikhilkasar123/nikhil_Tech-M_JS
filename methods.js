var games=['Football','Kabbadi','cricket','Batminton','Gyming'];

console.log('Games before push',games);
games.push('Hollyball');
console.log('Games after push',games);

games.pop();
console.log('Games after pop',games);

games.unshift('Baseball');
console.log(games);

var afterslice=games.slice(1,3);
console.log('slice elements are',afterslice);
console.log('After slicing',games);