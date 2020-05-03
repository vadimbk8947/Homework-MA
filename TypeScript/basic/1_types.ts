const isFetching: boolean = true;
const isLoading: boolean = false;

const int: number = 42;
const float: number = 4.5;
const num: number = 3e10;

const massage: string = "hello TypeScript";

const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13];
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13];

const words: string[] = ["hello ts"];

//Tuple
const contact: [string, number] = ["vadim", 123456];

//Any
let variable: any = 42;
//...
variable = "new string";
variable = [];

// ------------------------------------------
function sayMyName(name: string): void {
  console.log(name);
}
sayMyName("vadim");

//Never
function throwError(message: string): never {
  throw new Error(massage);
}

function infinite(): never {
  while (true) {}
}

//Type
type Login = string;

const login: Login = "admin";
// const login2: Login = 2

type ID = string | number;
const id1: ID = 1234;
const id2: ID = "1234";

//null
type SomeType = string | null | undefined;
