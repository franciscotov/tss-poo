import { Animal, Dog } from "./09-protected";

/**
 * Animal es una clase que fue declarada como abstract
 * por lo que no permite que se creen instancias
 * a partir de ella directamente, aunque se pueden
 * crear instancias a partir de las clases hijas(
 * si estas no son abstact)
 */
// const animal = new Animal('elie');
// animal.greeting();

const cheis = new Dog('cheis', 'fran');
cheis.greeting();
cheis.woof(2);
