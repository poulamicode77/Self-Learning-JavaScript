Callback function is passed inside a function to be exceuted later
function greet(name){
    console.log("Hello, " + name + "!") ;
}
function userInput(callback){
    let name = "Poulami";
    callback(name);
}
userInput(greet);
