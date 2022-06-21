export class MyDate {

  constructor(
    public year: number = 1993,
    public month: number = 7,
    private day: number = 10
  ){}

  public printFormat() : string {
    const day = this.addPadding(this.day)
    const month = this.addPadding(this.month)
    return `${day}/${month}/${this.year}`;
  }

  private addPadding(value: number) {
    if(value < 10){
      return `0${value}`;
    }
    return `${value}`;
  }

  public add(amount: number, type: 'days' | 'months' | 'year'){
    if(type === 'days' ){
      this.day += amount;
    }
    if(type === 'months' ){
      this.month += amount;
    }
    if(type === 'year' ){
      this.year += amount;
    }
  }
}

const myDate = new MyDate(1993, 7, 9);
console.log(myDate.printFormat());

const myDate2 = new MyDate();
console.log(myDate2.printFormat());
