// module.js

// Definisikan kelas
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Metode untuk menyapa
  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

// Eksport kelas
export { Person };
