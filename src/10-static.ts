console.log(Math.PI)
console.log(Math.max(1,2,3,4,5,8,0))


class MyMath {
  static readonly PI = 3.14;

  static max(...numbers: number[]) {
    return numbers.reduce((acc, item) => acc >= item ? acc: item, -Infinity)
  }
}


console.log('Math', Math.PI)
console.log('MyMath', MyMath.PI)
let numbers: number[] = [-1, -7 ,-8]
console.log('MyMath', MyMath.max(...numbers))
