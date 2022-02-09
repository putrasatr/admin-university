import { garis, greetingSentence } from "../constants";
import { Interface } from "readline";
import UsersTable from "../services/control";
import mainMenu from "./mainMenu";

interface ProfileProps {
  Password: string;
  Username: string;
  Level: string;
}

const users = new UsersTable();

export default function mainLogin(rl: Interface) {
  console.log(`FF
  ${greetingSentence}
  ${garis}`);
  askUsername(rl);
}

function askUsername(rl: Interface) {
  rl.question("username: ", (Username) => {
    users.checkUsername(Username, askPassword, askUsername, rl);
  });
}
function askPassword(rl: Interface, pw: ProfileProps) {
  rl.question(`password:`, (password) => {
    if (password !== pw.Password) {
      console.log(`password salah silahkan coba lagi`);
      askPassword(rl, pw);
    } else {
      console.log(
        `${garis}\nSelamat datang, ${pw.Username}. Level akses mu adalah ${pw.Level}\n${garis}\n`
      );
      mainMenu(rl);
    }
  });
}
