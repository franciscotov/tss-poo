export interface Driver {
  batabase: string;
  password: string;
  port: number;

  // se pueden agregar métodos a la interface
  connect(): void;
  disconnect():void;
  isConnected(name: string): boolean;
}

// const driver : Driver = {
//   batabase: 'string',
//   password: 'string',
//   port: 3000,
// }

/*
implementamos una interface en la clase, en cuyo caso
estamos firmando un "contrato" en el cual la clase siempre
debe cumplir con el standart que cada interface debe tener,
no obstante solo se pueden poner atributos y
metodos públicos
*/
class PostgresDriver implements Driver{
  constructor(
    public batabase: string,
    public password: string,
    public port: number,
  ){}

  disconnect(): void {
    // code
  }
  isConnected(name: string): boolean {
    return true;
  }

  connect(): void {

  }
}

class OracleDriver implements Driver{
  constructor(
    public batabase: string,
    public password: string,
    public port: number,
  ){}

  disconnect(): void {
    // code
  }
  isConnected(name: string): boolean {
    return true;
  }

  connect(): void {

  }
}
