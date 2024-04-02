import Database from "better-sqlite3";
const db = new Database("./data/toots.db", { verbose: console.log });
db.pragma("journal_mode = WAL");

process.on("exit", () => db.close());
process.on("SIGHUP", () => process.exit(128 + 1));
process.on("SIGINT", () => process.exit(128 + 2));
process.on("SIGTERM", () => process.exit(128 + 15));

export function getToots() {
  const sql = `select rowid, * from toots order by time desc`;
  const stmnt = db.prepare(sql);
  const rows = stmnt.all();
  return rows;
}

export function getToot(rowid) {
  const sql = `select rowid, * from toots where rowid = $rowid`;
  const stmnt = db.prepare(sql);
  const toot = stmnt.get({ rowid });
  return toot;
}

export function createToot(user, text) {
  const sql = `INSERT INTO toots (user, text) VALUES ($user, $text);`;
  const stmnt = db.prepare(sql);
  const info = stmnt.run({ user, text });
  return info.lastInsertRowid;
}

export function getUser(user) {
  const _user = user.toLowerCase();
  const sql = `SELECT * FROM users WHERE username = $user`;
  const stmnt = db.prepare(sql);
  const rows = stmnt.get({ user: _user });
  return rows;
}

export async function createUser(user, password) {
  const _user = user.toLowerCase();
  // Check for a password
  if (!password) throw new Error(`Password not entered`);

  // Check if user already exists
  const existing = await getUser(_user);
  if (existing)
    throw new Error(`Username ${_user} already exists`);

  // Create user
  const sql = `INSERT INTO users (username, password) VALUES ($user, $password);`;
  const stmnt = db.prepare(sql);
  try {
    const info = stmnt.run({ user: _user, password });
    console.log(info);
    return info;
  } catch (error) {
    console.log(error);
    throw new Error("Could not make user");
  }
}
