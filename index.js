let x = 1;

const hotdog = new Promise( (res, rej) =>  //Promises
x === 1 ? res("Hooray!") : rej("Oh no")); //Conditional Ternary Operators

//Using advance arrow functions
hotdog.then( (message) => console.log(message) ) 
.catch( (message) => console.log(message) )
.finally( () => console.log("execution completed"));

