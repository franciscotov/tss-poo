export class MyService {

  static instance: MyService | null = null;

  private constructor(
    private name: string
  ){}

  getName(){
    return this.name
  }

  /**
   * al ser instance de tipo static puede ser accesada.
   * podemos crear una instancia desde la propia clase
   * sin importar que el constructor sea de tipo private
   */
  static create(name: string){
    if(MyService.instance === null){
      MyService.instance = new MyService(name);
    }
    return MyService.instance;
  }
}


const myService1 = MyService.create('myService1');
console.log(myService1.getName());

const myService2 = MyService.create('myService2');
console.log(myService2.getName());

const myService3 = MyService.create('myService3');
console.log(myService3.getName());

console.log(myService1 === myService2);
