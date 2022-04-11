/** 
 * Validator
 */
import { Validation } from "./Validation";
const { EmailValidator, ZipCodeValidator, LettersOnlyValidator } = Validation;
// Some samples to try
let strings = ["Hello", "98052", "431", "satriap@gmail.com"];
// Validators to use
let validators: { [s: string]: Validation.StringValidator } = {};
validators["ZIP code"] = new ZipCodeValidator();
validators["Email format"] = new EmailValidator();
validators["Letters only"] = new LettersOnlyValidator();
// Show whether each string passed each validator
for (let s of strings) {
  for (let name in validators) {
    console.log(
      `"${s}" - ${
        validators[name].isAcceptable(s) ? "matches" : "does not match"
      } ${name}`
    );
  }
}


/** 
 * Decimal To Binary
 */
const decimalToBinary = (num: number): number =>
  num === 0 ? 0 : (num % 2) + 10 * decimalToBinary(~~(num / 2));
// 10
console.log(decimalToBinary(40));
// 10100
console.log(decimalToBinary(35.34));


/**
 * From object of Array To Single Object
 */
const toSingleObject = <
  T extends Record<PropertyKey, unknown>,
  K extends keyof T
>(
  arr: T[],
  key: K
): Record<string, T> =>
  Object.fromEntries(arr.map((item) => [item[key], item]));
// {
//   '1': { id: 1, name: 'Bravo', gender: 'Male' },
//   '3': { id: 3, name: 'Charlie', gender: 'Female' }
// }
const userArr = [
  { id: 1, name: "Bravo", gender: "Male" },
  { id: 3, name: "Charlie", gender: "Female" },
];
const userObj = toSingleObject(userArr, "id");
const singObj = toSingleObject(
  [
    {
      type: "vegetable",
      name: "carrot",
    },
    {
      type: "fruit",
      name: "carrot",
      id: "12",
    },
    {
      type: "fruit",
      name: "apple",
      id: "qe",
    },
  ],
  "id"
);
console.log(userObj);
console.log(singObj);
