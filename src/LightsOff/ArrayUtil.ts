export const copyArray1d = <T>(arr:T[]):T[] => {
  return arr.map((element:T) :T => element )
}

export const copyArray2d = <T>(arr:T[][]):T[][] => (
  arr.map((element:T[]) => copyArray1d<T>(element))
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

export const create1dArray = <T> (n:number, fill:T) => [...Array(n).fill(fill)]

export const create2dArray = <T,> (n:number, fill:T) => [...Array(n).fill(create1dArray(n, fill))]


