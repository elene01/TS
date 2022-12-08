import { getArea } from './area';

export interface Circle {
  shape: 'Circle';
  radius: number;
}
export interface Rectangle {
  shape: 'Rectangle';
  length: number;
  width: number;
}
export interface Triangle {
  shape: 'Triangle';
  height: number;
  base: number;
}

console.log(getArea({ shape: 'Circle', radius: 5 }));
console.log(getArea({ shape: 'Rectangle', length: 10, width: 5 }));
console.log(getArea({ shape: 'Triangle', height: 10, base: 20 }));
