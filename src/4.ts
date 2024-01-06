class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random();
  }

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  protected key: Key;

  constructor(key: Key) {
    this.key = key;
  }

  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected door: boolean = false;
  protected tenants: Person[] = [];
  protected key: Key;

  constructor(key: Key) {
    this.key = key;
  }

  abstract openDoor(key: Key): void;

  comeIn(person: Person): void {
    if (this.door) {
      // Check for the presence of the key
      if (person.getKey().getSignature() === this.key.getSignature()) {
        this.tenants.push(person);
        console.log('The door is open. The person has entered the house.');
      } else {
        console.log('Incorrect key. Entry is prohibited.');
      }
    } else {
      console.log('The door is closed. Open the door first.');
    }
  }
}

class MyHouse extends House {
  openDoor(key: Key): void {
    // Check for the presence of the key
    if (this.key.getSignature() === key.getSignature()) {
      this.door = true;
      console.log('The door is open.');
    } else {
      console.log('Incorrect key. The door remains closed.');
    }
  }
}

// Key validation when creating objects
const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());
house.comeIn(person);
