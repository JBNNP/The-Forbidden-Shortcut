let x = 1;

const hotdog = new Promise( (res, rej) => 
x === 1 ? res("Hooray!") : rej("Oh no"));

hotdog.then( (message) => console.log(message) )
.catch( (message) => console.log(message) )
.finally( () => console.log("execution completed"));

