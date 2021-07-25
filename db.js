const db = require('knex')(require('./knexfile.js'));

const addItem = async (item) => {
  try {
    return await db("TestTable").insert(item);
  } catch (err) {
    console.log(err);
    throw err;
  }
}

const deleteAllItems = async () => {
  try {
    return await db("TestTable").del();
  } catch (err) {
    console.log(err);
    throw err;
  }
}

const get = async () => {
  try {
    return await db("TestTable");
  } catch (err) {
    console.log(err);
    throw err;
  }
}

module.exports = { addItem, deleteAllItems, get, db }