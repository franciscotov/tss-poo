// function getValue (value: number | string){
//   return value;
// }

/**
 * de esta manera se pueden enviar tipos a la funcion
 * @param value
 * @returns
 */
function getValue<myType, myType2>(value: myType){
  return value;
}

getValue<number, string>(12).toFixed();
getValue<string, string>('12').toLowerCase();
getValue<number[], string>([1,2,3,12 ])
