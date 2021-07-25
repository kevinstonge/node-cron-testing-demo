const db = require('knex')(require('./knexfile.js'));

const addItem = async (item) => {
  try {
    await db("TestTable").insert(item);
    return true;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

const deleteAllItems = async () => {
  try {
    await db("TestTable").del();
    return true;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

module.exports = { addItem, deleteAllItems }