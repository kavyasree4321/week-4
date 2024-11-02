// Base class Animal
class Animal {
    constructor(name, type) {
      this.name = name;
      this.type = type;
    }
  
    speak() {
      console.log('${this.name} the ${this.type} makes a sound.');
    }
  }
  
  // Subclass Dog that inherits from Animal
  class Dog extends Animal {
    constructor(name) {
      super(name, 'Dog'); // Call the parent constructor with type as 'Dog'
    }
  
    bark() {
      console.log('${this.name} barks!');
    }
  }
  
  // Creating an instance of Dog
  const myDog = new Dog("Buddy");
  
  // Using methods from both the Animal class and the Dog subclass
  myDog.speak(); // Output: Buddy the Dog makes a sound.
  myDog.bark();  // Output: Buddy barks!