module.exports = {
  client: "sqlite3",
  connection: {
    filename: "./db.sqlite"
  },
  migrations: {
    directory: './migrations/'
  },
  useNullAsDefault: true
}