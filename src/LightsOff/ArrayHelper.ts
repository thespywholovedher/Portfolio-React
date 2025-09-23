const array1dCopy = <T>(arr:T[]):T[] => {
  return arr.map((element:T) :T => element )
}

const array2dCopy = <T>(arr:T[][]):T[][] => (
  arr.map((element:T[]) => array1dCopy<T>(element))
);

const array2dCopy2 = <T>(arr:T[][]):T[][] => {
  const arrCopy:T[][] = [];
  for(let i = 0; i < arr.length; i++){
    arrCopy[i] = [];
    for(let j = 0; j < arr[i].length; j++){
      arrCopy[i][j] = arr[i][j];
    }
  }

  return arrCopy;
}

export {array1dCopy, array2dCopy, array2dCopy2}