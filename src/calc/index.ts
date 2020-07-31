import { createInterface } from "readline";
import { runner } from "./runner";
import { calculateType } from './calculate-type'

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputType: number;
let isCorrectType = true;

const inputTypeQuestion = (): Promise<(number | boolean)> =>
  new Promise((resolve) => {
    rl.question(`
Choose input string type: 
  1. Simple input string;
  2. Reverse Polish notation;
>`,
      (answer: string) => {
        if (Number(answer) === calculateType.BASE || Number(answer) == calculateType.REVERT_POLISH_NOTATION) {
          resolve(Number(answer));
        } else {
          resolve(false);
        }
      });
  });

const question = (): Promise<null> =>
  new Promise((resolve) => {

    rl.question("> ", (answer: string) => {
      const result = runner(answer, inputType);
      if (result) {
        console.log(`Result: ${result}`);
      }

      resolve();
    });

  });

async function app(): Promise<null> {

  do {
    await inputTypeQuestion()
      .then(inputValue => {
        if (typeof inputValue === "number") {
          inputType = inputValue;
          isCorrectType = true;
        }
        else {
          isCorrectType = inputValue;
          console.log("Input correct type: 1 or 2!!!!");
        }
      });
  } while (!isCorrectType);

  while (true) {
    await question();
  }
}

app();