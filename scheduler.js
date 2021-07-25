const schedule = require('./schedule.js');
const cron = require('node-cron');
schedule.forEach(scheduleItem  => {
  cron.schedule(scheduleItem.cronString, scheduleItem.callback)
})