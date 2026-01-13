/* eslint-disable @typescript-eslint/no-unused-vars */
// Task 02: Mini functional–utility library
// All helpers are declared but not implemented.

export function mapArray<T, R>(source: readonly T[], mapper: (item: T, index: number) => R): R[] {
  if (source == null || source === undefined){
    throw new TypeError()
  }
  let result: R[]=[];
  for(let i = 0; i < source.length; i++){
    result.push(mapper(source[i], i));
  }
  return result;
}

export function filterArray<T>(source: readonly T[], predicate: (item: T, index: number) => boolean): T[] {
  if (source == null || source === undefined){
    throw new TypeError()
  }  
  let result: T[]=[];
  for(let i = 0; i < source.length; i++){
    if(predicate(source[i], i)) {
      result.push(source[i]);
    }
  }
  return result;
}

export function reduceArray<T, R>(source: readonly T[], reducer: (acc: R, item: T, index: number) => R, initial: R): R {
  if (source == null || source === undefined){
    throw new TypeError()
  }
  let acc = initial;
  for(let i = 0; i < source.length; i++){
    acc = reducer(acc, source[i], i);
  }
  return acc;
}

export function partition<T>(source: readonly T[], predicate: (item: T) => boolean): [T[], T[]] {
  if (source == null || source === undefined){
    throw new TypeError()
  }
  let a : T[] =[];
  let b : T[] =[];
  for(let i = 0; i < source.length; i++){
    if(predicate(source[i])) {
      a.push(source[i]);
    } else {
      b.push(source[i]);
    }
  }
  return [a,b];
}

export function groupBy<T, K extends PropertyKey>(source: readonly T[], keySelector: (item: T) => K): Record<K, T[]> {
  if (source == null || source === undefined){
    throw new TypeError()
  }
  let result ={} as Record<K,T[]>;
  for(let i = 0; i< source.length; i++){
    const key = keySelector(source[i]);
    if(!result[key]){
      result[key]=[];
      result[key].push(source[i]);
    }
    else{
      result[key].push(source[i]);
    }
  }
return result;
}
