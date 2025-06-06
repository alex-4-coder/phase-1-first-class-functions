function receivesAFunction(callback) {
  callback(); // simply calls the passed-in function
}

function returnsANamedFunction() {
  function namedFunction() {
    console.log("I am a named function");
  }
  return namedFunction;
}

function returnsAnAnonymousFunction() {
  return function() {
    console.log("I am anonymous");
  };
  
  // OR using arrow function syntax:
  // return () => console.log("I am anonymous");
}
