import * as readline from "readline";
import LoginCLI from "./pages";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "",
});

LoginCLI(rl);
