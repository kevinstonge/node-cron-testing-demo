const db = require('./db.js');
const schedule = [
  { 
    eventTitle: "M",
    cronString: "0 9 * * Monday",
    callback: async () => { 
      await db.addItem({"TestItem": "M"});
    }
  },
  { 
    eventTitle: "T",
    cronString: "0 9 * * Tuesday",
    callback: async () => { 
      await db.db.transaction((trx) => {
        return trx("TestTable").del().then(()=>
          trx("TestTable").insert({"TestItem": "T"})
        );
      });
    }
  },
  { 
    eventTitle: "W",
    cronString: "0 9 * * Wednesday",
    callback: async () => { 
      await db.addItem({"TestItem": "W"});
    }
  },
  { 
    eventTitle: "R",
    cronString: "0 9 * * Thursday",
    callback: async () => { 
      await db.addItem({"TestItem": "R"});
    }
  },
];

module.exports = schedule;