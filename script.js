console.log('greetings from script.js');

// *****************
//function onClickEvent() {
// *****************

const Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly

  //this.first = firstAndLast.split(" ")[0];
  //this.last = firstAndLast.split(" ")[1];
  //this.firstAndLast = firstAndLast;
  let fullName = firstAndLast;

  this.getFullName = function() {
    console.log(fullName);
    return fullName;
  };
  
  this.getFirstName = function() {
    console.log(fullName.split(" ")[0]);
    return fullName.split(" ")[0];
  };

  this.getLastName = function() {
    console.log(fullName.split(" ")[1]);
    return fullName.split(" ")[1];
  };

  this.setFirstName = function(first) {
    fullName = first + " " + fullName.split(" ")[1];
    console.log(fullName);
  };

  this.setLastName = function(last) {
    fullName = fullName.split(" ")[0] + " " + last;
    console.log(fullName);
  };

  this.setFullName = function(firstAndLast) {
    fullName = firstAndLast;
    console.log(fullName);
  };

};

const bob = new Person('Bob Ross');
bob.getFullName();
bob.getFirstName();
bob.getLastName();
console.log(Object.keys(bob));
bob.setFirstName("Lance");
bob.getFullName();
bob.setLastName("Anderson");
bob.getFullName();
bob.setFullName("Oscar Meyer");
bob.getFullName();



// *****************
//}
// *****************