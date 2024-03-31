/**
 * Title: person.class.ts
 * Author: Jeremy Lates
 * Date: 03/31/2024
 * Description: Person class
 * Note:
 * Code was adapted from https://github.com/buwebdev/web-425/blob/master/week-1/ts-examples/person.class.ts
 */

//Import IPerson interface
import { IPerson } from "./person.interface";

class Person implements IPerson {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

//Instantiate a new person object and write it out to the console
let myName = new Person("Jeremy", "Lates");
console.log(`My name is ${myName.firstName}  ${myName.lastName}`);
