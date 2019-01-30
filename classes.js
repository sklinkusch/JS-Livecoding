'use strict';

/*****************************************************************
 * CLASSES
 ****************************************************************/

//-----------------------------------//
// The old, prototype-based approach //
//-----------------------------------//

// Defining the "constructor" that will be executed, when
// "new User()" is used to initialize a new object.
function User(name) {
  this.name = name;
}

// Define a "method" of this "class" that we create.
User.prototype.sayHello = function() {
  console.log(`Hello ${this.name}`);
};

// Initilaize a new instance of the class and pass an argument, that
// will be set as a property of the class in the constructor.
const user = new User("Peter");
console.log(user)

//-------------------------------//
// Defining classes, the new way //
//-------------------------------//

// We are using the new "class" keyword to create the class (ES6)
class Car {
  // This method is executed once, when new ClassName() is called and always has
  // the same name "constructor" in ES6.
  constructor(model) {
    // With "this", we refer to the instance (= the object) that is created with
    // "new Car()" so that we can set properties, call its own methods etc.
    this.setModel(model);
  }
  
  // Methods are written like functions, just without the "function" keyword
  // in front and they behave like any regular function with arguments, etc.
  setModel(model) {
    // Again, we use "this" to change the property of the instance (= the object)
    // that was created when the class was initialized with "new Car()".
    this.model = model;
  }
  
  // We create a third method, which will show the current value of the property
  // "model" in the dev tools console.
  sayModel() {
    console.log(this.model);
  }
}

// new = Creates a NEW instances of a class, that has its own property values
const polo = new Car("VW Polo");
console.log(polo);

// We use the method "setModel()" to change the property "model" without modifying
// it directly from the outside. Never change the properties of a class instance,
// after initializing it, without a "setter" method.
polo.setModel("VW Polo V");
console.log(polo);

// We call the method "sayModel" from the "polo" object, to show its model
// in the developer tools console.
polo.sayModel();

// We create a second instance of the class "Car" that has another model and its
// own properties, which are not related to the ones of the "polo" object.
// Every instance has its own properties. 
const corsa = new Car("Opel Corsa");
console.log(corsa);

corsa.sayModel();

// If we want to know if an object is initialized from a given class, we can use
// the "instanceof" keyword.
console.log(corsa instanceof Car);

//-----------------------------------------------------------------//
// Setting multiple properties in the constructor, using an object //
//-----------------------------------------------------------------//

class Truck {
  constructor(options = {}) {
    this.tires = 8;
    this.horn = true;
    
    // We merge all properties of the "options" argument as properties of the class,
    // by putting it into "this". All properties that exist in both objects, will
    // be overwritten. All properties that only exist in the "options" argument
    // will be added as new ones to the class properties.
    Object.assign(this, options);
  }
  
  sayTires() {
    this.say(`The truck has ${this.tires} tires.`);
  }
  
  say(string) {
    console.log(string);
  }
}

const man = new Truck();
console.log(man);
man.sayTires();

const volvo = new Truck({tires: 12, horn: false});
console.log(volvo);

volvo.sayTires();

//----------------//
// Static methods //
//----------------//

// Static methods can be called without initializing an object of the class and are
// often used as helpers to get reusable code.

class StringHelper {
  // By using the "static" keyword in front of our method, we define that it can be
  // used without initializing an instance of the class.
  static toUpperCase(string) {
    return string.toUpperCase();
  }
}

console.log(
  // We can use the static method directly
  StringHelper.toUpperCase("hello world!")
)

//-------------------//
// Class inheritance //
//-------------------//

// We create a "base class" that we want to use for all animals that share the same
// set of properties and methods.

class Animal {
  constructor(name) {
    // Every animal has a name and a skin color
    this.name = name;
    this.skinColor = "blue";
  }
  
  // Every animal is able to say its name
  sayName() {
    console.log(this.name);
  }
  
  // Every animal can change its skin color
  setSkinColor(color) {
    this.skinColor = color;
  }
}

// The class "Dog" extends the class "Animal", which means its getting all of the
// "Animal" class properties and methods. Then we start to extend or overwrite
// some of the classes features.

class Dog extends Animal {
  constructor(name) {
    super(name);
  }
  
  // We overwrite the method "sayName" to add the text "The dog's name is"
  // to the output, so that its different to the orignal one.
  sayName() {
    console.log(`The dog's name is ${this.name}.`);
  }
  
  // We add a method "run" that not all animals have.
  run() {
    console.log(`The dog "${this.name}" is running ...`);
  }
}

class Fish extends Animal {
  constructor(name) {
    super(name);
  }
  
  swim() {
    console.log(`The fish "${this.name}" is swimming ...`);
  }
}

const dog = new Dog("Felix");
dog.setSkinColor("brown");
dog.run();

console.log(dog);

const fish = new Fish("Dory");
fish.swim();


//---------------------//
// The scope of "this" //
//---------------------//

class GithubApi {
  constructor() {
    this.apiUrl = "https://api.github.com";
  }
  
  getUserRepositories(username) {
    const url = `${this.apiUrl}/users/${username}/repos`;
    
    // jQuery.get() calls a URL (using the HTTP GET method) and if the API
    // returns JSON data, it will return the JSON object immediately.
    // If not, it will return a Response object, that we learn about later.
    
    jQuery.get(url)
      // The fat arrow function sets the scope of "this" to be the object
      // (instance of this class), because it always uses the left-hand side
      // of the function definition as a scope. In this case the left-hand side
      // is inside of the class and refers to its instance.
      .done((response) => {
        // We call the method to list the repositories in the console, once the
        // asynchronous request is finished and we got the response.
        this.listRepositories(response);
      })
  }
  
  listRepositories(repositories) {
    console.log("Repositories:");
    
    repositories.forEach(repository => {
      console.log(repository);
    });
  }
}

const github = new GithubApi();
github.getUserRepositories("noreading");
