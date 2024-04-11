import Database from "better-sqlite3";
import bcrypt from "bcrypt";
const db = new Database("./data/epc_project.db", { verbose: console.log });
db.pragma("journal_mode = WAL");

process.on("exit", () => db.close());
process.on("SIGHUP", () => process.exit(128 + 1));
process.on("SIGINT", () => process.exit(128 + 2));
process.on("SIGTERM", () => process.exit(128 + 15));

export function getTrackedHomes() {
  const sql = `select rowid, * from tracked_homes order by updated_at desc`;
  const stmnt = db.prepare(sql);
  const rows = stmnt.all();
  return rows;
}

export function trackHome(lmk_key, stage,  user_username) {
  const sql = `INSERT INTO tracked_homes (lmk_key, stage, user_username) VALUES ($lmk_key, $stage,$user_username);`;
  const stmnt = db.prepare(sql);
  const info = stmnt.run({ lmk_key, stage, user_username });
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
    if (existing) throw new Error(`Username ${_user} already exists`);
  
    // Hash password
    const hash = await bcrypt.hash(password, 12);
  
    // Create user
    const sql = `INSERT INTO users (username, password) VALUES ($user, $password);`;
    const stmnt = db.prepare(sql);
    try {
      const info = stmnt.run({ user: _user, password: hash });
      return info;
    } catch (error) {
      throw new Error("Could not make user");
    }
  }
  
  export function getUserHomes(user) {
    const sql = `SELECT * FROM tracked_homes WHERE user_username = $user;`;
    const stmnt = db.prepare(sql);
    const users_homes = stmnt.all({ user });
    return users_homes;
  }

  export function getUserLmk(userUsername) {
    const sql = `SELECT lmk_key FROM tracked_homes WHERE user_username = ?`;
    const statement = db.prepare(sql);
    const rows = statement.all(userUsername);
    return rows.map(row => row.lmk_key);
  }

  export function getAllLmk() {
    const sql = `SELECT lmk_key FROM tracked_homes`;
    const statement = db.prepare(sql);
    const rows = statement.all();
    return rows.map(row => row.lmk_key);
  }

  export function getAllHomes() {
    const sql = `SELECT * FROM tracked_homes`;
    const statement = db.prepare(sql);
    const all_homes = statement.all();
    return all_homes;
  }

  export function createNotes(lmk_key, notes, user) {
    const sql = `INSERT INTO notes (lmk_key, notes, user_username) VALUES ($lmk_key, $notes, $user);`;
    const stmnt = db.prepare(sql);
    const info = stmnt.run({ lmk_key, notes, user });
    return info.lastInsertRowid;
  }
  
