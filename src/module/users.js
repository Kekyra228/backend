import fs from "fs";
import path from "path";

const __dirname = import.meta.dirname;

export function getUsers() {
  const filePath = path.join(__dirname, "../data/users.json");
  return JSON.parse(fs.readFileSync(filePath));
}
