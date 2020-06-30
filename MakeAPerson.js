/*
Fill in the object constructor with the following methods below:
getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)

Run the tests to see the expected output for each method. The methods that take an argument must accept only one
argument and it has to be a string. These methods must be the only available means of interacting with the object.
 */

var Person = function(firstAndLast) {
    // not using this.firstName
    // declaring variable in the constructor to make it private
    // that way the only way to access them is through the getters and setters 
    let firstName = firstAndLast.split(" ")[0];
    let lastName = firstAndLast.split(" ")[1];

    this.getFirstName = function () {
        return firstName
    }
    this.getLastName = function () {
        return lastName
    }
    this.getFullName = function() {
        return `${firstName} ${lastName}`;
    };

    this.setFirstName = function (first) {
        firstName = first;
    }
    this.setLastName = function (last) {
        lastName = last;
    }
    this.setFullName = function (firstAndLast) {
        firstName = firstAndLast.split(" ")[0];
        lastName = firstAndLast.split(" ")[1];
    }
    return firstAndLast;
};

var bob = new Person('Bob Ross');
console.log(bob.getFullName());