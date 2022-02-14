import { garis, greetingSentence } from "../constants";
import { rl } from "../services/readline";
import UsersTable from "../services/control";
import mainMenu from "./main-menu";
import { ProfileProps } from "../interfaces";

const users = new UsersTable();

export default function mainLogin() {
  console.log(`
  ${greetingSentence}
  ${garis}`);
  askUsername();
}

function askUsername() {
  rl.question("username: ", (Username) => {
    users.checkUsername(Username, askPassword, askUsername);
  });
}
function askPassword(pw: ProfileProps) {
  rl.question(`password:`, (password) => {
    if (password !== pw.Password) {
      console.log(`password salah silahkan coba lagi`);
      askPassword(pw);
    } else {
      console.log(
        `${garis}\nSelamat datang, ${pw.Username}. Level akses mu adalah ${pw.Level}\n${garis}\n`
      );
      mainMenu();
    }
  });
}
