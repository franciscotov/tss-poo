export abstract class Animal{
  // protected restringe la modificacion de la propiedad
  // pero se hereda en los hijos(se pueden modificar
  // desde las clases hijas)
  constructor(protected name:string){}

  move(){
    console.log('Moving along!')
  }

  greeting(){
    return `Hello, I'm ${this.name}`
  }

  protected doSomething(){
    console.log('someting!')
  }
}

export class Dog extends Animal{
  constructor(
    name: string,
    public owner:string
  ){
    super(name);
  }

  woof(times:number){
    for(let i: number = 0; i<times; i++ ){
      console.log('woof!');
    }
    this.doSomething();
  }

  move() {
    console.log('moving as a dog')
    super.move();
  }
}

// const fifi = new Animal('fifi');
// fifi.move();
// console.log(fifi.greeting());

const cheis = new Dog('cheis', 'fran');
cheis.woof(1);
cheis.move();

