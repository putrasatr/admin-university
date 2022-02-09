import { pool, Select, Where } from "../../config";
import { handleError } from "../../helpers";
import { Interface } from "readline";

export default class Users {
  checkUsername(
    input: string,
    found: Function,
    notFound: Function,
    rl: Interface
  ) {
    pool.all(
      `${Select("userName")} ${Where({ Username: input })}`,
      { $Username: input },
      (err: string, rows) => {
        if (err) handleError(err);
        if (rows.length > 0) {
          found(rl, rows[0]);
        } else {
          console.log(`Username tidak ditemukan`);
          notFound(rl);
        }
      }
    );
  }
}
